const router = require('express').Router();

router.post('/', (req, res) => {
	res.redner('pages/second-page');
});

module.exports = router;
