'use strict'
const mongoose = require('mongoose')

mongoose.set("strictQuery", false)

try {

    mongoose.connect('mongodb+srv://newAdmin:kT0ymUYJTrMRp7Sm@cluster0.sxpngpr.mongodb.net/demo123', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    // mongoose.connect('mongodb://127.0.0.1:27017/loginUser', {
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true
    // })
    
    const db = mongoose.connection

    db.once('open', function () {
        console.log('Database connected successfully!')
    })

} catch (error) {
    db.on('error', console.error.bind(console, 'Database connection failed'))
}
