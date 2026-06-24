const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });
  return arrayOfFiles;
}

const publicFiles = getAllFiles('public');
const srcFiles = getAllFiles('src');
const allFiles = [...publicFiles, ...srcFiles];

const codeFiles = srcFiles.filter(f => f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.css'));

const unused = [];

// For each file in public
publicFiles.forEach(f => {
  const normalizedPath = f.replace(/\\/g, '/');
  // Usually public files are referenced as /filename or /images/filename
  const searchPattern = normalizedPath.replace('public', '');
  const baseName = path.basename(f);
  
  let isUsed = false;
  try {
    execSync(`git grep -F "${baseName}" src/`, { stdio: 'ignore' });
    isUsed = true;
  } catch (e) {
  }
  
  // Try another approach just in case
  if (!isUsed) {
    try {
      execSync(`git grep -F "${searchPattern}" src/`, { stdio: 'ignore' });
      isUsed = true;
    } catch(e) {}
  }

  // Check globals.css as well, or just `git grep` search the whole repo
  if (!isUsed) {
    try {
      execSync(`git grep -F "${baseName}"`, { stdio: 'ignore' });
      isUsed = true;
    } catch(e) {}
  }

  if (!isUsed && !['favicon.ico', 'robots.txt', 'sitemap.xml', 'grid-pattern.svg', 'dots-pattern.svg'].includes(baseName)) {
    const size = fs.statSync(f).size;
    unused.push({ path: f, type: 'public', size, reason: 'Not referenced in codebase' });
  }
});

// For each file in src/components
srcFiles.forEach(f => {
  if (f.includes('src\\components') && f.endsWith('.tsx')) {
    const baseName = path.basename(f, '.tsx');
    let isUsed = false;
    
    try {
      const out = execSync(`git grep -w "${baseName}" src/`, { encoding: 'utf8' });
      const lines = out.split('\n').filter(Boolean);
      const otherFiles = lines.some(line => !line.startsWith(f.replace(/\\/g, '/')));
      if (otherFiles) isUsed = true;
    } catch(e) {}

    // Some components might be exported dynamically or imported differently, but usually git grep catches the import
    if (!isUsed && !['layout.tsx', 'page.tsx', 'not-found.tsx'].includes(baseName)) {
      const size = fs.statSync(f).size;
      unused.push({ path: f, type: 'component', size, reason: 'Component not imported or used in src/' });
    }
  }
});

// For lib and hooks
srcFiles.forEach(f => {
  if ((f.includes('src\\lib') || f.includes('src\\hooks')) && f.endsWith('.ts')) {
    const baseName = path.basename(f, '.ts');
    let isUsed = false;
    if (baseName === 'utils') return; // commonly used
    try {
      const out = execSync(`git grep -w "${baseName}" src/`, { encoding: 'utf8' });
      const lines = out.split('\n').filter(Boolean);
      const otherFiles = lines.some(line => !line.startsWith(f.replace(/\\/g, '/')));
      if (otherFiles) isUsed = true;
    } catch (e) {}

    if (!isUsed) {
      const size = fs.statSync(f).size;
      unused.push({ path: f, type: 'lib', size, reason: 'Lib/hook file not imported' });
    }
  }
});

console.log(JSON.stringify(unused, null, 2));
