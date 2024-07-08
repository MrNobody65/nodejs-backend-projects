const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getabc = (req, res) => {
    res.send('Hello World! in /abc')
}

module.exports = {
    getHomepage,
    getabc
}