import userService from "../../services/users";
import passwordService from "../../services/password";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Used by passport to authenticate a user
function authenticateUser(email: string, password: string, done: any) {
  const user = userService
    .getUserByEmail(email)
    .then((userObj) => {
      if (!userObj) {
        return done(null, false);
      }

      const match = passwordService.verifyHash(password, userObj!.password);

      if (match) {
        return done(null, userObj);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
}

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const localStrategy = new LocalStrategy(customFields, authenticateUser);

passport.use(localStrategy);

export default passport;
