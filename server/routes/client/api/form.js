const router = require('express').Router();

router.post('/', (req, res) => {
	res.render('pages/second-page');
});

module.exports = router;
