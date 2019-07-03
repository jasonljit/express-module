const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('pages/second-page');
});

module.exports = router;
