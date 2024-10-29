const sql = require('mssql');
const config = require('./config');
const queries = require('./queries');

async function getConnection() {
    try {
        return await sql.connect(config);
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
}

async function editStudentPage(req, res) {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
        .input('Id', sql.Int, id)
        .query('SELECT * FROM dbo.Students WHERE Id = @Id');
    res.render('edit_student_page', { student: result.recordset[0] });
}

async function updateStudent(req, res) {
    const { id } = req.params;
    const { FirstName, LastName, Id_Group, Term } = req.body;
    await queries.updateStudent(id, FirstName, LastName, Id_Group, Term);
    res.redirect('/students');
}

async function editFacultyPage(req, res) {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
        .input('Id', sql.Int, id)
        .query('SELECT * FROM dbo.Faculties WHERE Id = @Id');
    res.render('edit_faculty_page', { faculty: result.recordset[0] });
}

async function updateFaculty(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    await queries.updateFaculty(id, name);
    res.redirect('/faculties');
}

async function editGroupPage(req, res) {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
        .input('Id', sql.Int, id)
        .query('SELECT * FROM dbo.Groups WHERE Id = @Id');
    res.render('edit_group_page', { group: result.recordset[0] });
}

async function updateGroup(req, res) {
    const { id } = req.params;
    const { name, Id_Faculty } = req.body;
    await queries.updateGroup(id, name, Id_Faculty);
    res.redirect('/groups');
}

module.exports = {
    editStudentPage,
    updateStudent,
    editFacultyPage,
    updateFaculty,
    editGroupPage,
    updateGroup,
};
