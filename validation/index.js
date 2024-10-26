const {validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errolist=result.array().map((err)=>err.msg) // for show only error msg
      /* return res.status(400).json({ errors: result.array() }); */
      return res.status(400).json({ errors: errolist });
    }
    next();
  }
};
