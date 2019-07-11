const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


//GET BACK ALL PSOTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch{
        res.json({message:err});
    }
});

//SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch{
        res.json({message: error});
    }
});
//SPECIFIC POST
router.get('/:postId', async (req, res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch{
        res.json({message: err});
    }
});
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch{
        res.json({message: err});
    }
});
//Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId},
            { $set: {title: req.body.title} }
        );
        res.json(updatedPost);
    }catch{
        res.json({message: err});
    }
});

module.exports = router;