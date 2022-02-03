module.exports = function ({ app, dbConn }) {
  app.post("/users/create", (req, res, next) => {
    const { id, email, password, fullname} = req.body;
    if (id && email && password && fullname) {
      const findAccountByEmail = "SELECT * FROM user_account WHERE user_email = ?";
      dbConn.query(findAccountByEmail, [email], function (error, account) {
        if (account && account.length !== 0) {
          res.status(200).jsonp({ message: 'The email existed in the system' });
        } else {
          const users = [[id, email, password, fullname]];
          const registerUserSql = "INSERT INTO user_account (id, user_email, user_password, user_full_name) VALUES ?";
          dbConn.query(registerUserSql, [users], function (error, insertedUser) {
            if (insertedUser) {
              res.status(200).jsonp({ id, email, fullname});
            } else {
              res.status(200).jsonp({ message: 'Cannot create your account, please try again' });
            }
          });
        }
      });
    } else {
      return res.status(200).jsonp({ message: "Please input required fields" });
    }
  });

  app.post("/users/details/add", (req, res, next) => {
    const {email, type, resume, linkedin_profile, yoe, preferred_loc, job_role} = req.body;
    
    if (email && type && resume && job_role) {
      const findAccountByEmail = "SELECT * FROM user_account WHERE user_email = ?";
      dbConn.query(findAccountByEmail, [email], function (error, account) {
        if (!account || account.length == 0) {
          res.status(400).jsonp({ message: 'The account doesnt exist in the system' });
        } else {
          const details = [type, resume, linkedin_profile, yoe, preferred_loc, job_role, account[0].id];
          const userDetailsSql = "UPDATE user_account SET user_type = ?, user_resume = ?, linkedin_profile =?, Y_O_E =?, preferred_location =?, job_role =? WHERE id = ?";
          dbConn.query(userDetailsSql, details, function (error, insertedUser) {
            if (insertedUser) {
              res.status(200).jsonp({email, type, resume, linkedin_profile, yoe, preferred_loc, job_role});
            } else {
              res.status(500).jsonp({ message: 'Couldnt save details, please try again' });
            }
          });
        }
      });
    } else {
      return res.status(500).jsonp({ message: "Please input required fields" });
    }
  });

  app.get("/users/details/get/:name", (req, res) => {
    const id = req.params.name;
    const findUserDetailsSql = "SELECT * FROM user_account WHERE user_full_name = ?";
    dbConn.query(findUserDetailsSql, [id], function (error, details) {
      res.status(200).jsonp(details);
    });
  });

}