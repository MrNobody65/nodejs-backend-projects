const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        'SELECT * FROM Users'
    )

    return results
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        'SELECT * FROM Users WHERE id = ?', [userId]
    )

    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (id, email, name, city) => {
    let [results, fields] = await connection.query(
        'UPDATE Users SET email = ?, name = ?, city = ? where id = ?', [email, name, city, id]
    )
}

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(
        'DELETE FROM Users WHERE id = ?', [userId]
    )
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}