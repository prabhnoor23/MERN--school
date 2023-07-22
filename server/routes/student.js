import express from 'express';
import { getStudents, createStudent } from '../controllers/student';
import student from './models/student.js';

const router = express.Router();

//adding a route

router.get('/', getStudents);
router.post('/', createStudent);


//exporting the router

export default router;