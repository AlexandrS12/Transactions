const queries = require('./queries');

async function addStudent(req, res) {
    const {FirstName, LastName, Id_Group, Term} = req.body;
    await queries.addStudent(FirstName, LastName, Id_Group, Term);
    res.redirect('/students');
}

async function addFaculty(req, res) {
    const { name } = req.body;
    await queries.addFaculty(name);
    res.redirect('/faculties');
}

async function addGroup(req, res) {
    const { name, Id_Faculty } = req.body;
    await queries.addGroup(name, Id_Faculty);
    res.redirect('/groups');
}

module.exports = {
    addStudent,
    addFaculty,
    addGroup,
};