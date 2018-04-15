class Logger {
    constructor() {}
    
    info(message) {
        console.log(message)
    }

    warning(message) {
        console.warn(message)
    }

    error(message) {
        console.error(message)
    }

    assert(message) {
        console.assert(message)
    }
}

module.exports = Logger