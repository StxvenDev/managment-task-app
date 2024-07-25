import mongoose from 'mongoose'

export const initDatabase = () => {
  return new Promise((resolve, reject) => { 
    try {
      const uri = process.env.MONGO_URI;
      mongoose.connect(uri);
      resolve('Database connection was successfull');
    } catch (error) {
      reject('Database exception', error);
    }
  })
}