const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { spawn } = require('child_process');
const authenticate = require("../middleware/authenticate")


require('../db/conn');
const User = require('../model/userSchema');
const { stringify } = require('querystring');

router.get('/', (req, res) => {
    res.send(`Hello world from signup in router js`);
});


// Using Promises
// router.post('/signup',(req, res) => {
//     const { username, password, confirmpassword } = req.body;
//     if (!username || !password || !confirmpassword) {
//         return res.status(422).json({ error: "Enter all fields" });
//     }

//     User.findOne({ username: username })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "User already exists" });
//             }

//             const user = new User({ username, password, confirmpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfully " });
//             }).catch((err) => res.status(500).json({ error: "Failed to register" }));
//         }).catch(err => { console.log(err); });

// });




// login route
router.post('/signin', async(req, res) => {
    try {
        let token;
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Enter all fields" });
        }
        const userLogin = await User.findOne({ username: username });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            console.log(userLogin);
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "user signed in successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }


    } catch (err) {
        console.log(err);
    }
});



router.post('/upload', async(req, res) => {
    try {
        const resumeString = req.body;
        const childPython = spawn('python', ["resume.py", stringify(resumeString)]);
        childPython.stdout.on('data', (data) => {
            const fs = require('fs');
            const myConsole = new console.Console(fs.createWriteStream('./output/Result.txt'));
            myConsole.log(`${data}`);
            
        });
        childPython.stderr.on('data', (data) => {
            console.log(`error: ${data}`);
        });

    } catch (err) {
        console.log(err);
    }

});




// Using async
router.post('/', async(req, res) => {
    console.log(req.body);

    const { username, password, confirmpassword } = req.body;
    if (!username || !password || !confirmpassword) {
        console.log("if");
        return res.status(422).json({ error: "Enter all fields" });

    } else {
        try {
            console.log("hello");
            const userExist = await User.findOne({ username: username });
            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            } else if (password != confirmpassword) {
                return res.status(422).json({ error: "password not matching" });
            } else {
                const user = new User({ username, password, confirmpassword });
                await user.save();
                res.status(201).json({ message: "user registered successfully " });
            }

        } catch (err) {
            console.log(err);
        }
    }

});


module.exports = router;