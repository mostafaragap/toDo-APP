const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    body('email').isEmail(),
    body('password').notEmpty().withMessage("password can't be empty"),
    body('password').isLength({ min: 5 }).withMessage("password can't be less than 5 chars"),
  ]
}

const tasksValidatorsRules = () => {
    return [
      body('title').notEmpty().withMessage("title shouldn't be empty"),
      body('body').notEmpty().withMessage("body can't be empty"),
      body('title').isLength({ min: 4 }).withMessage("title can't be less than 4 chars"),
      body('body').isLength({ min: 5 }).withMessage("body can't be less than 5 chars"),
    ]
  }
  


const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(400).json({
      errors: extractedErrors,
    })
  }

module.exports = {userValidationRules , tasksValidatorsRules,validate}