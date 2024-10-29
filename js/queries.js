const sql = require('mssql');
const config = require('./config');

async function getConnection() {
    return await sql.connect(config);
}

async function getAllStudents() {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM dbo.Students');
    return result.recordset;
}

async function getAllFaculties() {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM dbo.Faculties');
    return result.recordset;
}

async function getAllGroups() {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM dbo.Groups');
    return result.recordset;
}

async function addStudent(FirstName, LastName, Id_Group, Term) {
    const pool = await getConnection();
    await pool.request()
        .input('FirstName', sql.VarChar, FirstName)
        .input('LastName', sql.VarChar, LastName)
        .input('Id_Group', sql.Int, Id_Group)
        .input('Term', sql.Int, Term)
        .query('INSERT INTO dbo.Students (FirstName, LastName, Id_Group, Term) VALUES (@FirstName, @LastName, @Id_Group, @Term)');
}

async function updateStudent(id, FirstName, LastName, Id_Group, Term) {
    const pool = await getConnection();
    await pool.request()
        .input('Id', sql.Int, id)
        .input('FirstName', sql.VarChar, FirstName)
        .input('LastName', sql.VarChar, LastName)
        .input('Id_Group', sql.Int, Id_Group)
        .input('Term', sql.Int, Term)
        .query('UPDATE dbo.Students SET FirstName = @FirstName, LastName = @LastName, Id_Group = @Id_Group, Term = @Term WHERE Id = @Id');
}

async function deleteStudent(id) {
    const pool = await getConnection();
    await pool.request()
        .input('Id', sql.Int, id)
        .query('DELETE FROM dbo.Students WHERE Id = @Id');
}

async function addFaculty(name) {
    const pool = await getConnection();
    await pool.request()
        .input('Name', sql.VarChar, name)
        .query('INSERT INTO dbo.Faculties (Name) VALUES (@Name)');
}

async function updateFaculty(id, name) {
    const pool = await getConnection();
    await pool.request()
        .input('Id', sql.Int, id)
        .input('Name', sql.VarChar, name)
        .query('UPDATE dbo.Faculties SET Name = @Name WHERE Id = @Id');
}

async function deleteFaculty(id) {
    const pool = await getConnection();
    await pool.request()
        .input('Id', sql.Int, id)
        .query('DELETE FROM dbo.Faculties WHERE Id = @Id');
}

async function addGroup(name, Id_Faculty) {
    const pool = await getConnection();
    await pool.request()
        .input('Name', sql.VarChar, name)
        .input('Id_Faculty', sql.Int, Id_Faculty)
        .query('INSERT INTO dbo.Groups (Name, Id_Faculty) VALUES (@Name, @Id_Faculty)');
}

async function updateGroup(id, name, Id_Faculty) {
    const pool = await getConnection();
    await pool.request()
        .input('Id', sql.Int, id)
        .input('Name', sql.VarChar, name)
        .input('Id_Faculty', sql.Int, Id_Faculty)
        .query('UPDATE dbo.Groups SET Name = @Name, Id_Faculty = @Id_Faculty WHERE Id = @Id');
}

async function deleteGroup(id) {
    const pool = await getConnection();
    await pool.request()
        .input('Id', sql.Int, id)
        .query('DELETE FROM dbo.Groups WHERE Id = @Id');
}

module.exports = {
    getAllStudents,
    getAllFaculties,
    getAllGroups,
    addStudent,
    updateStudent,
    deleteStudent,
    addFaculty,
    updateFaculty,
    deleteFaculty,
    addGroup,
    updateGroup,
    deleteGroup,
};