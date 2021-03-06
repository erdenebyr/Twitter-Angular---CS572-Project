const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const actionController = require('../controllers/actionController')
const homeController = require('../controllers/homeController')
const adminController = require('../controllers/adminController')
const loginController = require('../controllers/loginController')
const { parse_json } = require('../middlewares/parseBody')
const { parse_url_encoded } = require('../middlewares/parseBody')
const { checkAuth } = require('../middlewares/checkAuth')

router.post('/action', parse_json, parse_url_encoded, checkAuth, actionController.doAction);
router.post('/signup', parse_json, parse_url_encoded, loginController.signup);
router.post('/login', parse_json, parse_url_encoded, loginController.login);
router.get('/home', parse_json, parse_url_encoded, checkAuth, homeController.getHome);
router.post('/edit', parse_json, parse_url_encoded, checkAuth, userController.editProfile)
router.post('/adminaction', parse_json, parse_url_encoded, checkAuth, adminController.doAction)
router.get('/home/suggest', parse_json, parse_url_encoded, checkAuth, homeController.getSuggest);
router.get('/search/:username', parse_json, parse_url_encoded, checkAuth, homeController.searchUser);
router.get('/followers/:username', parse_json, parse_url_encoded, checkAuth, userController.getFollowers)
router.get('/following/:username', parse_json, parse_url_encoded, checkAuth, userController.getFollowing)

router.get('/:username', parse_json, parse_url_encoded, checkAuth, userController.getProfile)
router.get('/:username/:tweetid', parse_json, parse_url_encoded, checkAuth, userController.getTweetDetail)

module.exports = router;