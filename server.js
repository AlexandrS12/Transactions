const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const displayHandler = require('./js/displayHandler');
const insertHandler = require('./js/insertHandler');
const deleteHandler = require('./js/deleteHandler');
const editHandler = require('./js/editHandler');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'pages', 'css')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/students', displayHandler.displayStudents);
app.get('/students/add', (req, res) => res.render('add_student_page'));
app.post('/students/add', insertHandler.addStudent);
app.get('/students/edit/:id', editHandler.editStudentPage);
app.post('/students/edit/:id', editHandler.updateStudent);
app.get('/students/delete/:id', deleteHandler.deleteStudent);

app.get('/faculties', displayHandler.displayFaculties);
app.get('/faculties/add', (req, res) => res.render('add_faculty_page'));
app.post('/faculties/add', insertHandler.addFaculty);
app.get('/faculties/edit/:id', editHandler.editFacultyPage);
app.post('/faculties/edit/:id', editHandler.updateFaculty);
app.get('/faculties/delete/:id', deleteHandler.deleteFaculty);

app.get('/groups', displayHandler.displayGroups);
app.get('/groups/add', (req, res) => res.render('add_group_page'));
app.post('/groups/add', insertHandler.addGroup);
app.get('/groups/edit/:id', editHandler.editGroupPage);
app.post('/groups/edit/:id', editHandler.updateGroup);
app.get('/groups/delete/:id', deleteHandler.deleteGroup);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});