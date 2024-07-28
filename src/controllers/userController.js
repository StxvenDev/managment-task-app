import { createUserService, getUserService, getUsersService } from "../services/userService.js";

const getUser = async (req, res) => {
  try {
    const {userId} = req.query; 
    const user = await getUserService(userId);
    return res.status(200).json({
      data: user,
      ok: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {
        msg: error.message
      },
      ok: false
    });
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await getUsersService();
    return res.status(200).json({
      data: users,
      ok: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {
        msg: error.message
      },
      ok: false
    });
  }
}

const createUser = async (req, res) => {
  try {
    const dataUser = req.body;
    await createUserService(dataUser);
    return res.status(201).json({
      data: {
        msg: 'User has been created successfully'
      },
      ok: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {
        msg: error.message
      },
      ok: false
    });
  }
}

export {
  getUser,
  getUsers,
  createUser
}