import User from "../models/userModel.js";

const getUsersRepository = async () => {
  const user = await User.find({});
  return user;
}

const getUserRepository = async (userId) => {
  const user = await User.findById(userId);
  return user;
}

const getUserByUsernameRepository = async (username) => {
  const user = await User.findOne({username});
  return user;
}

const createUserRepository = async (dataUser) => {
  await User.create(dataUser);
}

const updateUserRepository = async (username, dataUser) => {
  const updateUser = await User.findOneAndUpdate({username}, {dataUser}, {returnDocument : "after"});
  return updateUser;
}

export {
  getUserRepository,
  getUsersRepository,
  createUserRepository,
  getUserByUsernameRepository,
  updateUserRepository
}