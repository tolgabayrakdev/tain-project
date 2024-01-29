import Joi from 'joi';

const registerUser = Joi.object({
    username: Joi.string().min(3).max(23).required(),
    email: Joi.string().email().min(8).max(50),
    password: Joi.string().min(6).max(16),
});

export default registerUser;
