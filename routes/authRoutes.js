const { Router } = require('express');
const authController = require('../controller/authcontroller');
const loadPages = require('../controller/loadPages');
const { checkGuest, checkAdmin} = require('../middleware/middleware');
const router = Router();
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()
 

//Render Pages
router.get ('/', loadPages.get_home);
router.get ('/admin', loadPages.get_admin);
router.get ('/visitor', loadPages.get_visitor);
router.get ('/adminForm', loadPages.adminForm);
router.get ('/adminSignup', loadPages.adminSignup);
router.get ('/guestForm', loadPages.guestForm);
router.get ('/login', loadPages.guestLogin);
router.get ('/guestAps', loadPages.guestAps);
router.get ('/guestEvents', loadPages.guestEvents);
router.get ('/adminAps', loadPages.adminAps);
router.get ('/adminEvents', loadPages.adminEvents);
router.get ('/approveApt', loadPages.approveApt);
router.get ('/joinPage', loadPages.joinPage);


//DB requests
router.post ('/createGuest', jsonParser, authController.createGuest);
router.post ('/loginGuest', jsonParser, authController.loginGuest);
router.post ('/createAdmin', jsonParser, authController.createAdmin);
router.post ('/loginAdmin', jsonParser, authController.loginAdmin);
router.get ('/logoutGuest', authController.logoutGuest);
router.get ('/logoutAdmin', authController.logoutAdmin);
router.post ('/postEvent', jsonParser, authController.postEvent);
router.post ('/bookAppointment', jsonParser, authController.bookAppointment);
router.post ('/join', jsonParser, authController.join);
router.get ('/findEvent', authController.findEvent);
router.get ('/findApt', authController.findApt);
router.put ('/approve/:id', jsonParser, authController.approve);


module.exports = router;