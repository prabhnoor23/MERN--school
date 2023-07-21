//create students

import React, {useState} from 'react';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': { margin: theme.spacing(1), width: '25ch', },

  },
}));
export default function CreateStudent() {
  const classes = useStyles();

  const [student, setStudent] = React.useState({

    regNo: 0,
    studentName: '',
    grade: '',
    section: ''
  });

  const createStudent = () =>{
    
  }
  return (
    <> <h2> Create Student </h2>
      <Box
        className={classes.root}
        // component="form"
        // sx={{
        //   '& > :*': { margin: theme.spacing(1), width: '25ch' },
        // }}
        noValidate
        autoComplete="off"
      >


        <TextField id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event) =>{
          setStudent({ ...student, regNo: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) =>{
          setStudent({ ...student, studentName: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) =>{
          setStudent({ ...student, grade: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) =>{
          setStudent({ ...student, section: event.target.value})
        }}/>

        <Button variant="contained" color='primary'  onClick={createStudent}>
          Create
         </Button>

      </Box>
    </>
  );
}
