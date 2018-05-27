if (process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'MongoDB coming here...'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/host-dev'}
}