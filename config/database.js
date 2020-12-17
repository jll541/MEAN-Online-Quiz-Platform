const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/' + this.db,
    // encryption for tokens and to know its our db
    secret: crypto,
    db: 'mean-quiz'
}
