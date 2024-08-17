const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let listUsers = await getAllUsers()
    return res.render('home.ejs', { listUsers: listUsers })
}

const getCreatepage = (req, res) => {
    return res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    let [results, fields] = await connection.query(
        'INSERT INTO Users(email, name, city) VALUES(?, ?, ?)', [email, name, city]
    )

    res.send("Create a user")
}

const getEditpage = async (req, res) => {
    const userId = req.params.userId
    let user = await getUserById(userId)

    return res.render('edit.ejs', { user: user })
}

const postEditUser = async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    await updateUserById(id, email, name, city)

    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.userId

    await deleteUserById(userId)

    res.redirect('/')
}

module.exports = {
    getHomepage,
    getCreatepage,
    postCreateUser,
    getEditpage,
    postEditUser,
    postDeleteUser
}