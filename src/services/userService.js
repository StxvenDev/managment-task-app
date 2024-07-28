import bcrypt from 'bcrypt';
import { createUserRepository, getUserByUsernameRepository, getUserRepository, getUsersRepository, updateUserRepository } from "../repository/userRepository.js"

const getUsersService = async () => {
  const users = await getUsersRepository();
  return users;
}

const getUserService = async (userId) => {
  if(!userId){
    throw new Error('The user id is required');
  }
  const user = await getUserRepository(userId);
  return user;
}

const createUserService = async (dataUser) => {
  const {username, password} = dataUser;
  const usernameInUse = await getUserByUsernameRepository(username);
  if(usernameInUse) throw new Error('Username is already in use');
  const hashPassword = await bcrypt.hash(password,10);
  dataUser[password] = hashPassword;
  await createUserRepository(dataUser);
}

const updateUserService = async (userId, username, dataUser) => {
  const {username : newUsername} = dataUser;
  const userExist = await getUserRepository(userId);
  if(!userExist) throw new Error('This user not exist');
  const usernameInUse = await getUserByUsernameRepository(newUsername);
  if(usernameInUse) throw new Error('Username is already in use');
  const user = await updateUserRepository(username, dataUser);
  return user;
}

export {
  getUserService,
  getUsersService,
  createUserService,
  updateUserService
}