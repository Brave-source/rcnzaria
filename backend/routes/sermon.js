const mongoose = require('mongoose')
const Sermon = require('../models/Sermon')
const router = require('express').Router()

// POST A SERMON
router.post('/', async(req, res) => {
    const newSermon = new Sermon(req.body)
    try {
       const savedSermon = await newSermon.save()
       res.status(200).json(savedSermon)
    }catch(err) {
        res.status(400).json(err)
    }
});

// UPDATE A SERMON
router.put('/:id', async(req, res) => {
    try {
        const updatedSermon = Sermon.findByIdAndUpdate(
            req.params.id, 
            {set: req.body},
            {new: true}
        )
        res.status(200).json(updatedSermon);
    }catch(err){
        res.status(400).json(err);
    }
});

// DELETE A SERMON
router.delete('/:id', async(req, res) => {
    try {
        await Sermon.findByIdAndDelete(req.params.id);
        res.status(200).json('Sermon has been deleted!!')
    }catch(err) {
        res.status(400).json(err);
    }
});

// GET A SERMON
router.get('/:id', async(req, res) => {
    try {
        const sermon = await Sermon.findById(req.params.id);
        res.status(200).json(sermon);
    }catch(err) {
        res.status(200).json(err);
    }
});

// GET ALL SERMONS
router.get('/', async(req, res) => {
    try {
        const sermons = await Sermon.find().sort({ createdAt: -1 });
        res.status(200).json(sermons)
    }catch(err) {
        res.status(200).json(err);
    }
});

module.exports = router;