import express from 'express';
import validateInput from '../shared/validations/signup';
import UserModel from '../models/users';
import bcrypt from 'bcrypt';

let router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    const { username, password, timezone, email } = req.body;
    const pass_diest = bcrypt.hashSync(password, 10);

    var user = new UserModel ({
      username:username,
      email:email,
      timezone:timezone,
      pass_digest:pass_diest
    });

    user.save( function(err){
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      }else{
        res.json({ success: true });
      }
    });
  } else {
    res.status(400).json(errors);
  }
});

export default router;
