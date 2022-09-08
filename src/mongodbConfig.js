const mongoURI = process.env.MONGODB || 'mongodb+srv://mibasededatos:2LCKa5NzgKC2Mx9p@clustermiapp.ibh8n5i.mongodb.net/api?retryWrites=true&w=majority';
const port = process.env.PORT || 2323;

module.exports = {
    port: port,
    db: mongoURI,
    secret_key_token: 'mySecretTokenKey'
};