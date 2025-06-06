const bcrypt = require("bcryptjs");

exports.hashPassword = async (plainText) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainText, salt);
};

exports.comparePassword = async (plainText, hashed) => {
  return bcrypt.compare(plainText, hashed);
};
