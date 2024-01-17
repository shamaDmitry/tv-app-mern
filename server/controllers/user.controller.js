import jsonwebtoken from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler.js';
import userModel from '../models/user.model.js';
import { put } from '@vercel/blob';

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const checkUser = await userModel.findOne({ email });

    if (checkUser) {
      return responseHandler.badrequest(res, 'email already used');
    }

    const user = new userModel();

    user.username = username;
    user.email = email;
    user.setPassword(password);

    await user.save();

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: '24h' }
    );

    responseHandler.created(res, {
      username: user.username,
      email: user.email,
      id: user.id,
      token,
      // ...user._doc,
    });
  } catch {
    responseHandler.error(res);
  }
};

const updateInfo = async (req, res) => {
  try {
    const { userId, userName } = req.body;

    const blob = await put(req.files.avatar.name, req.files.avatar.data, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const user = await userModel.findOneAndUpdate(
      { _id: userId },
      { username: userName, avatar: blob.url },
      {
        new: true,
        useFindAndModify: true,
      }
    );

    user.avatar = blob.url;

    responseHandler.ok(res, {
      ...user._doc,
      id: user.id,
    });
  } catch {
    responseHandler.error(res);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel
      .findOne({ email })
      .select('email avatar username password salt id');

    if (!user) {
      return responseHandler.badrequest(res, 'User not exist');
    }

    if (!user.validatePassword(password)) {
      return responseHandler.badrequest(res, 'Wrong password');
    }

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: '24h' }
    );

    user.password = undefined;
    user.salt = undefined;

    responseHandler.ok(res, {
      token,
      ...user._doc,
      id: user.id,
    });
  } catch {
    responseHandler.error(res);
  }
};

const getInfo = async (req, res) => {
  const { id } = req.query;

  try {
    const user = await userModel.findById(id);

    if (!user) return responseHandler.notfound(res);

    responseHandler.ok(res, user);
  } catch {
    responseHandler.error(res);
  }
};

const getTest = async (req, res) => {
  try {
    responseHandler.ok(res, {
      msg: 'user test',
      test: req.user,
    });
  } catch {
    responseHandler.error(res);
  }
};

export default {
  register,
  login,
  getInfo,
  getTest,
  updateInfo,
};
