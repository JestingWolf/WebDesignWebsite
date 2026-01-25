// File: scripts/count-images.js
// This is a Node.js script (runs on your computer, not in browser)

// 1. Import Node.js filesystem module
const fs = require('fs');
const path = require('path');

console.log('🔍 Counting images...');

// 2. Define where your images are
const imagesFolder = path.join(__dirname, '../src/assets/images');

// 3. Read the folder contents
try {
    const files = fs.readdirSync(imagesFolder);
    console.log(`Found ${files.length} total files`);
    
    // 4. Filter for image files only
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
    });
    
    // 5. Show what we found
    console.log(`📸 Found ${imageFiles.length} images:`);
    imageFiles.forEach(file => console.log(`   - ${file}`));
    
    // 6. Create a TypeScript file with the count
    const outputFile = path.join(__dirname, '../src/image-data.ts');
    const content = `// 📁 AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// This file is created automatically when you run npm start or npm build
// Last updated: ${new Date().toISOString()}

export const IMAGE_COUNT = ${imageFiles.length};
export const IMAGE_FILES = ${JSON.stringify(imageFiles, null, 2)};
`;

    // 7. Write the file
    fs.writeFileSync(outputFile, content);
    console.log(`✅ Created: src/image-data.ts with ${imageFiles.length} images`);
    
} catch (error) {
    console.error('❌ Error counting images:', error.message);
    console.log('Creating fallback file with count = 0');
    
    // Create fallback file if folder doesn't exist
    const fallbackContent = `export const IMAGE_COUNT = 0;
export const IMAGE_FILES = [];`;
    
    fs.writeFileSync(
        path.join(__dirname, '../src/image-data.ts'),
        fallbackContent
    );
}