const express = require('express')
const router = express.Router()
const {createUser, getAllUsers, getSingleUser, deleteUser, updateUser, loginUser, forgotPassword, } = require('../controllers/user')

router.post("/register",createUser)
router.post("/login",loginUser)
router.get("/users",getAllUsers)
router.get("/users/:id",getSingleUser)
router.delete("/users/:id",deleteUser)
router.patch("/users/:id",updateUser)
router.post("/forget,",forgotPassword)
module.exports = router