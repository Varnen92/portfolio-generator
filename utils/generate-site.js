const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error, reject promise and send error to catch
            if (err) {
                reject(err)
                // return out of the function here to make sure the Promise doesn't execute the resolve as well
                return
            }

            // if everything went well, resolve the Promise and send the successful data to the then method
            resolve({
                ok: true,
                message: 'File Created!'
            })
        })
    })
}

const copyFile = function() {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            })
          });
    })
}

module.exports = { writeFile, copyFile}