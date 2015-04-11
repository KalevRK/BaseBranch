var userController = require('./userController.js');

module.exports = function(app, passport) {
    app.route('/')
      .post(userController.createUser);

    app.route('/:userId')
      .get(userController.getUser);

    app.route('/reputation/:userId')
      .post(userController.updateReputation);

    app.route('/picture/:userId')
      .post(userController.uploadPicture);

    app.route('/curricula/created/:userId')
      .get(userController.getCreatedCurricula);

    app.route('/curricula/subscribed/:userId')
      .get(userController.getSubscribedCurricula)
      .post(userController.subscribeToCurriculum);

    // signup route
    app.route('/signup')
      .post(passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to homepage
        failureRedirect: '/api/user/signup', // redirect back to signup page
        failureFlash: true // allows the use of flash messages
      }));

    // login route
    app.route('/login')
      .post(passport.authenticate('local-login', {
        successRedirect: '/', // redirect to homepage
        failureRedirect: '/api/user/login', // redirect back to the login page
        failureFlash: true // allows the use of flash messages
      }));
};
