import JWT from "jsonwebtoken";
//protected routes from token based
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: `error in admin middleware`,
    });
  }
};
//Admin acess
export const isAdmin = async (req, res) => {
  try {
    const user = await userModel.findByTd(req.user._id);
    if (user.role !== 1) {
      return res.staus(401).send({
        success: false,
        message: "Unauthorized Acess",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
