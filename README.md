# broccoli-output-wrapper

This libary is to provide Proxy to FS operations for Broccoli. Broccoli Plugin developers can just write to the outputPath using the proxy.
This libary is not intended to use independently outside broccoli or broccoli-plugin as of now.

## APIs

* readFileSync
* existsSync
* lstatSync
* readdirSync
* statSync
* writeFileSync
* appendFileSync
* rmdirSync
* mkdirSync

All these operations above are same as File Operations documented in node API [guide](https://nodejs.org/api/fs.html).
