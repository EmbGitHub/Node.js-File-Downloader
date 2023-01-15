# Node.js File Downloader

This application allows you to download a file by passing a URL and save it in a directory passed as a path argument.

## Installation

```bash
npm install
```

## Usage

To download a file, run the following command and pass in the URL of the file you wish to download and the path of the directory where you want to save the file:

```bash
node download.js [URL] [DIRECTORY PATH]
```

## Note

Make sure the directory you want to save the file in, exists before running the command.

## Dependencies

* https
* fs
* process