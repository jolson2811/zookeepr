const path = require('path');
const router = require('express').Router();

// Route to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Route to animals.html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// Route to zookeepers.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;