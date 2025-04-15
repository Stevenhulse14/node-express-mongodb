const bcrypt = require("bcrypt")

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

const comparePassword = async (entered, hashed) => {
  return await bcrypt.compare(entered, hashed)
}

module.exports = { hashPassword, comparePassword }
