import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './GlobalStyles';
import Header from './components/header/Header';
import LandingPage from './pages/home/LandingPage';
import Footer from './components/footer/Footer';
import Blogs from './pages/blogs-page/Blogs';
import './app.css';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <div className='main-container-wrapper'>
            <div className='main-container'>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/blogs-page' component={Blogs} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
