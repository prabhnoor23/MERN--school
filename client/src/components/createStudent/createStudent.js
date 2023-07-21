//create students

import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles.js';

export default function BasicTextFields() {
   const classes = useStyles();
    return (
       <> <h2> Create Student </h2>
    <Box
    className={classes.root}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
        
      <TextField id="outlined-basic" label="Registration No." variant="outlined" />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Grade" variant="outlined" />
      <TextField id="outlined-basic" label="Section" variant="outlined" />

      <Button variant="contained" color='primary'>Create</Button>
      
    </Box>
    </>
  );
}
