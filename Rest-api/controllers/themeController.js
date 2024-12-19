const { themeModel } = require('../models');
const { newPost } = require('./postController')

function getThemes(req, res, next) {
    themeModel.find()
        .populate('userId')
        .then(themes => res.json(themes))
        .catch(next);
}

function getTheme(req, res, next) {
    const { themeId } = req.params;
// TODO change id
    themeModel.findById(themeId)
        .populate({
            path: 'posts',
            populate: {
                path: 'userId'
            }
        })
        .then(theme => res.json(theme))
        .catch(next);
}

function createTheme(req, res, next) {
    const { make,
        likes,
        model,
        year,
        imgUrl,
        mileage,
        fuelType,
        price,
        located,
        postText } = req.body;
    const { _id: userId } = req.user;

    themeModel.create({
        make,
        likes,
        model,
        year,
        imgUrl,
        mileage,
        fuelType,
        price,
        located,
    }).then(theme => {
        newPost(postText, userId, theme._id)
            .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
    }).catch(next);
}


function subscribe(req, res, next) {
    const themeId = req.params.themeId;
    const { _id: userId } = req.user;
    themeModel.findByIdAndUpdate({ _id: themeId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedTheme => {
            res.status(200).json(updatedTheme)
        })
        .catch(next);
}

function like(req, res, next) {
    const { themeId } = req.params;
    const { _id: userId } = req.user;
    // TODO check themeId with theme._id

    console.log('like')

    postModel.updateOne({ _id: themeId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getThemes,
    createTheme,
    getTheme,
    subscribe,
    like,
}
