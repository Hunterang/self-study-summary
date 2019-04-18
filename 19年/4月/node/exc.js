


function extname (ext) {
    if ( ext === '.html' ) {
      return 'text/html'
    }else if ( ext === '.js' ) {
      return 'text/html'
    } else if ( ext === '.css' ) {
      return 'text/css'
    }else {
      return 'text/html'
    }
}

module.exports = extname
