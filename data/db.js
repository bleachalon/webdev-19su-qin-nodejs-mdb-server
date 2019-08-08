module.exports= function () {
    var username = process.env.MY_MONGODB_USERNAME;
    var password = process.env.MY_MONGODB_PASSWORD;
    mongoose.connect('mongodb://'+username+':'+password+'@ds127655.mlab.com:27655/heroku_6d1bnhgk', {useNewUrlParser: true});

}
