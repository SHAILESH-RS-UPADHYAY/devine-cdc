import os
from PIL import Image

input_dir = r"C:\Users\DELL\OneDrive\Attachments\Desktop\app store\wellness pic"
output_dir = r"C:\Users\DELL\Documents\devine-cdc\public\images\wellness"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for file in os.listdir(input_dir):
    if file.lower().endswith(".png"):
        img = Image.open(os.path.join(input_dir, file))
        webp_name = file.rsplit(".", 1)[0].replace(" ", "_").lower() + ".webp"
        img.save(os.path.join(output_dir, webp_name), "webp", quality=85)
        print(f"Converted {file} to {webp_name}")
