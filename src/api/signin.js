const User = require('../components/User')
const bcrypt = require('bcryptjs');


module.exports = (app) => {


    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        }= body;

        if (!firstName) {
            return res.send({
                success: false,
                message: 'Error: First name cannot be null.'
            })
        }

        if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name cannot be null.'
            })
        }

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be null.'
            })
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be null.'
            })
        }

        email = email.toLowerCase();

        //1. Verify email
        //2. save

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account allready Exist '
                })
            }
            //Save the new user
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = password.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server Error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up '
                })

            })
        })
    })


    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        }= body;
    })
};