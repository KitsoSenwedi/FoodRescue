import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My MUI App</Typography>
          <Button color="inherit" style={{ marginLeft: 'auto' }}>Login</Button>
        </Toolbar>
      </AppBar>

      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to My App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a simple user interface built with Material-UI.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;