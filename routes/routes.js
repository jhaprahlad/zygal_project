const router = require("express").Router()

const { submitButton1, SearchButton} = require("../controllers/homepagecontroller")
const { createUser, loginUser } = require("../controllers/userController")

const {submitButton1} = require("../controllers/homepagecontroller")
router.post("/register", createUser)
router.post("/login", loginUser)


router.post("submitButton1", submitButton1)
router.post("SearchButton", SearchButton)


module.exports = router