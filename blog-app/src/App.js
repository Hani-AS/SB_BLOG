import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './GlobalStyles';
import Header from './components/header/Header';
import LandingPage from './pages/home/LandingPage';
import Footer from './components/footer/Footer';
import Blogs from './pages/blogs-page/Blogs';
import './app.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className='main-container'>
            <Header />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/blogs-page' component={Blogs} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
