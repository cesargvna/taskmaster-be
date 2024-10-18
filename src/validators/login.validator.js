import validateResult from '../utils/handleValidator.js';
import { body } from 'express-validator';

const loginValidator = [
  body('email').exists().withMessage('Email is requires').isEmail().withMessage("Email is invalid"),
  body('password').exists().withMessage('password is required').isLength({ min: 6 }).withMessage('password must be at leat 6 characters long'),
  (req, res, next) => {
    return validateResult(req, res, next);
  }
]
export default loginValidator;
