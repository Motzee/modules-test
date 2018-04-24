const path = require('path') ;

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve('./public/js'),
        filename : 'bundle.js'
    }
}