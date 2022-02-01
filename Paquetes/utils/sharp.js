const sharp = require('sharp');

sharp("original.png")
    .resize(200, 200)
    .toFile("resized.png", (err, info) => {
        console.log(err);
        console.log(info);
    });
