import https from 'https'
import fs from 'fs'
import { argv } from 'process';

//destruct the argv array and get the 3rd and 4th element
const [, , url, path] = argv

//check if the url and path are provided
if(url === undefined || path === undefined) {
    console.log("Please provide the url and path");
    process.exit(1);
}

//get the image from the url
https.get(url, (res) => {
    // Create a writable stream
    const file = fs.createWriteStream(`${path}`);
    res.pipe(file);
    // When the download is completed, we close the stream
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
});
