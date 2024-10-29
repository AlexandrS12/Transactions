const queries = require('./queries');

async function displayStudents(req, res) {
    const students = await queries.getAllStudents();
    res.render('students', { students });
}

async function displayFaculties(req, res) {
    const faculties = await queries.getAllFaculties();
    res.render('faculties', { faculties });
}

async function displayGroups(req, res) {
    const groups = await queries.getAllGroups();
    res.render('groups', { groups });
}

module.exports = {
    displayStudents,
    displayFaculties,
    displayGroups,
};