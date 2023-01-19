const Hero = require('../models/Hero');
const router = require('express').Router();

// POST A HERO
router.post('/', async (req, res) => {
    const newHero = new Hero(req.body);
    try {
        const savedHero = await newHero.save();
        res.status(200).json(savedHero);
    }catch(err) {
        res.status(500).json(err);
    }
});

// EDIT A HERO
router.put('/:id', async(req, res) => {
    try {
        const updatedHero = await Hero.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedHero);
    }catch(err) {
        res.status(500).json(err);
    }
});

// DELETE A HERO
router.delete('/:id', async(req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.id);
        res.status(200).json('Hero has been deleted!');
    }catch(err) {
        res.status(500).json(err);
    }
});

// GET A HERO
router.get('/:id', async(req,  res) => {
    try {
        const getHero = await Hero.findById(req.params.id);
        res.status(200).json(getHero);
    }catch(err) {
        res.status(500).json(err);
    }
});

// GET ALL HEROS
router.get('/', async(req,  res) => {
    try {
        const getHeroS = await Hero.find();
        res.status(200).json(getHeroS);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;