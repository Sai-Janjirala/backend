const { ImageKit } = require("@imagekit/nodejs")


const imagekit = new ImageKit({
    privateKey: "private_W2doB7BfyLahCv+M98208chbkWQ=",
})


async function uploadFile(buffer) {

    console.log(buffer);

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result;

}

module.exports = uploadFile;