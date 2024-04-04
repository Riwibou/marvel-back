const Users = require('../models/Users');

const isAuthenticated = async (req, res, next) => {
   if (!req.headers.authorization) {
      return res.status(401).json({ message: error.message });
   }
   const token = req.headers.authorization.replace('Bearer ', '');
   const user = await Users.findOne({ token: token }).select(
      'username token _id'
   );
   if (!user) {
      return res.status(401).json({ message: error.message });
   }
   req.user = user;
   next();
};
module.exports = isAuthenticated;
