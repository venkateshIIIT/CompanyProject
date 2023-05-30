const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllMatchUsers = catchAsync(async (req, res, next) => {
  const user = await User.find(req.params.id);
  const requiredhobbies = user.hobbies
  const AllUsers = await User.find();
  const MatchedUsers = []
   AllUsers.forEach(User => {
     User.hobbies.forEach(hobbie=>{
      if(requiredhobbies.includes(hobbie)){
          MatchedUsers.push(User)
          return 
      }
     })
  });

  
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      MatchedUsers
    }
  });
});
