function validateToken (req, res, next) {
 const { authorization } = req.headers
  if (authorization) {
    const token = authorization.split(' ')[1]
    const {key} = req

    try {
      const isValid = jsonwebtoken
    }


}
}
export default validateToken