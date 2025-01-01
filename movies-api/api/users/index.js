import express, { response } from 'express';
import User from './userModel.js';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register(Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
    try {
        if (req.query.action === 'email'){
            console.log("email route ran")
            await emailExists(req, res);
        }
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        }
         else {
            await authenticateUser(req, res);
        }
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body.password)
        if (req.body.password) {
            const saltRounds = 10;
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        }
        const result = await User.updateOne(
            { _id: req.params.id },
            req.body
        );

        if (result.matchedCount) {
            res.status(200).json({ code: 200, msg: 'User updated successfully' });
        } else {
            res.status(404).json({ code: 404, msg: 'Unable to update user' });
        }
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});

router.post('/setFavourites', async (req, res) => {
    try{
        if (req.query.action === 'movies') {
            await setMoviePlaylist(req, res);
        } else if (req.query.action === 'shows'){
            await setShowPlaylist(req, res);
        }
    }
    catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});

router.post('/getFavourites', async (req, res) => {
    try{
        if (req.query.action === 'movies') {
            await getMoviePlaylist(req, res);
        } else if (req.query.action === 'shows'){
            await getShowPlaylist(req, res);
        }
        
    }
    catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});

async function registerUser(req, res) {
    // Add input validation logic here
    await User.create(req.body);
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}

async function authenticateUser(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET);
        res.status(200).json({ success: true, token: 'BEARER ' + token });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}

async function setMoviePlaylist(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }
    
    const result = await User.updateOne(
        { username: req.body.username },
        { $set: { moviePlaylist: req.body.moviePlaylist } }
    );
    console.log(result)
    if (result) {
        res.status(200).json({ code:200, msg: 'Movie Playlist added' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update movie playlist' });
    }
}

async function setShowPlaylist(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }
    
    const result = await User.updateOne({username: req.body.username}, {$set: {showPlaylist: req.body.showPlaylist}});
    console.log(result)
    if (result) {
        res.status(200).json({ code:200, msg: 'Show Playlist added' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update show playlist' });
    }
}

async function emailExists(req, res) {
    const email = await User.findByEmail(req.body.email);
    if (email) {
        res.status(200).json({ code:200, msg: email._id });
        sendEmail(req.body.email,email._id)
    } else {
        res.status(404).json({ code: 404, msg: false });
    }
    
}

async function getShowPlaylist(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }
    
    const result = await User.findOne({username: req.body.username});

    console.log(result)
    if (result.showPlaylist) {
        res.status(200).json({ code:200, msg: result.showPlaylist });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find show playlist' });
    }
}

async function getMoviePlaylist(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }
    
    const result = await User.findOne({username: req.body.username});

    console.log(result)
    if (result.moviePlaylist) {
        res.status(200).json({ code:200, msg: result.moviePlaylist });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find movie playlist' });
    }
}

async function sendEmail(email, id) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS,
        },
    });
    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: email, 
        subject: 'Password Reset Request', 
        text: `Click here to reset your password: http://localhost:3000/reset/${id}`,
    };
    console.log("sending email 2");
    const response = await transporter.sendMail(mailOptions);
    console.log("Email response:", response); 
   
}

export default router;

