const postModel = require('../models/index.model');

exports.addPost = async (req, res) => {
    try {
        await postModel.create(req.body)
        res.json({
            "message": "post added!"
        })
    } catch (err) {
        console.log(err);
    }
}