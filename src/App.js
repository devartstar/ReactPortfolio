import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container className={'top_60'}>
        <Grid container spacing={7}>

          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>


          <Grid item xs>
            <Router>
              <Header />
              <div className='main_content container_shadow'>
                <Switch>
                  <Route path='/portfolio'><Portfolio /></Route>
                  <Route path='/resume'><Resume /></Route>
                </Switch>
              </div>

            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default App;
