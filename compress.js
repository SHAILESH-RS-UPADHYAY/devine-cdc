const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, 'public');

// Helper to get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

async function processImages() {
  console.log('Scanning for images to optimize...');
  const allFiles = getAllFiles(PUBLIC_DIR);
  
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  const filesToProcess = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext) && !file.includes('node_modules') && !file.includes('.next');
  });

  console.log(`Found ${filesToProcess.length} images to process.`);

  let totalSaved = 0;

  for (const file of filesToProcess) {
    const parsedPath = path.parse(file);
    const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
    
    // Skip if webp already exists and we just run it again (optional, but good for safety)
    if (fs.existsSync(outputPath)) {
        // If webp exists, we can still overwrite it or skip. Let's overwrite for now.
    }

    try {
      const originalStats = fs.statSync(file);
      const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`\nProcessing: ${parsedPath.base} (${originalSizeMB} MB)`);
      
      const image = sharp(file);
      const metadata = await image.metadata();
      
      // Resize if wider than 1920px
      if (metadata.width > 1920) {
        image.resize({ width: 1920, withoutEnlargement: true });
        console.log(`  -> Resizing from ${metadata.width}px to 1920px`);
      }

      await image
        .webp({ quality: 85, effort: 6 }) // high effort for better compression
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
      
      const savedMB = originalStats.size - newStats.size;
      totalSaved += savedMB;
      
      console.log(`  -> Saved as ${parsedPath.name}.webp (${newSizeMB} MB)`);
    } catch (err) {
      console.error(`  -> Failed to process ${file}:`, err.message);
    }
  }

  console.log(`\n✅ Done! Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
}

processImages();
