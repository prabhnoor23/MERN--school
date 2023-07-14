import logo from './logo.svg';
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';  

function App() {
  return (
    <div className = "App">

      <Container maxWidth = "lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align = 'center'> Student Create and Show </Typography>
        </AppBar>
    
      </Container>

    </div>
  );
}

export default App;
