const router = require('express').Router();
const cors = require('cors');
const { sendMail } = require('../models/mail.model');



router.post('/', cors(), (req, res) => {
    try {
        const { subject, text } = req.body;
        const mail = sendMail({ subject, text });

        res.send(mail);
    } catch (error) {
        res.json({ ERROR: error.message });
    }
})

module.exports = router;