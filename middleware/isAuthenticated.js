// const Users = require('../models/Users');

// const isAuthenticated = async (req, res, next) => {
//    try {
//       if (!req.headers.authorization) {
//          return res.status(401).json({ message: error.message });
//       }
//       const token = req.headers.authorization.replace('Bearer ', '');
//       const user = await Users.findOne({ token: token }).select(
//          'email token _id'
//       );
//       if (!user) {
//          return res.status(401).json({ message: error.message });
//       }
//       req.user = user;
//       next();
//    } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: error.message });
//    }
// };

// module.exports = isAuthenticated;
