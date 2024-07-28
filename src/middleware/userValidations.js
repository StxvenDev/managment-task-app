import mongoose from "mongoose";

const validateMongoId = (req, res, next) => {
  try {
    let userId = '';
    if (req.body.userId) {
      userId = req.body.userId;
    }
    if (req.query.userId) {
      userId = req.query.userId;
    }
    if(!mongoose.Types.ObjectId.isValid(userId)){
      res.status(400).json({msg:'this is no a mongoID'});
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'server error'})
  }
}


export {
  validateMongoId
}