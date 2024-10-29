const queries = require('./queries');

async function deleteStudent(req, res) {
    const { id } = req.params;
    await queries.deleteStudent(id);
    res.redirect('/students');
}

async function deleteFaculty(req, res) {
    const { id } = req.params;
    await queries.deleteFaculty(id);
    res.redirect('/faculties');
}

async function deleteGroup(req, res) {
    const { id } = req.params;
    await queries.deleteGroup(id);
    res.redirect('/groups');
}

module.exports = {
    deleteStudent,
    deleteFaculty,
    deleteGroup,
};