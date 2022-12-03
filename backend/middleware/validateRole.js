const validRole = (req, res, next) => {
    let email = req.email;
    if (!email.includes("admin")) {
      res.status(200).json({ message: "Access Restricted", status: "failed" });
      return;
    }
    next();
  };
  module.exports = { validRole };
  