import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FieldsPage from './FieldsPage';
import ServicesPage from './ServicesPage';
import ReviewsPage from './ReviewsPage';
import Booking from './Booking';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json')
      },
      fr: {
        translation: require('./locales/fr.json')
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>{t('homepage.title')}</h1>
        <p className="slogan">{t('homepage.slogan')}</p>
      </div>
      <div className="homepage-content">
        <p className="homepage-paragraph">{t('homepage.paragraph1')}</p>
        <p className="homepage-paragraph">{t('homepage.paragraph2')}</p>
        <div className="homepage-buttons">
          <Link to="/booking" className="btn btn-primary">
            {t('homepage.bookingButton')}
          </Link>
        </div>
        <div className="homepage-images">
          <img
            src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzOTA5OTY2MjM3NjcyODk5/world-cup-soccer-ball.jpg"
            alt="Soccer ball"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1200px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg"
            alt="Stadium"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  const { t } = useTranslation();

  return (
    <Router>
      <div className="app">
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-centered">
          <Container>
            <Navbar.Brand as={Link} to="/" className="brand-left">
              Greatest Kicks
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-center">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">
                  {t('navbar.home')}
                </Nav.Link>
                <Nav.Link as={Link} to="/fields">
                  {t('navbar.fields')}
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  {t('navbar.services')}
                </Nav.Link>
                <Nav.Link as={Link} to="/booking">
                  {t('navbar.booking')}
                </Nav.Link>
                <Nav.Link as={Link} to="/reviews">
                  {t('navbar.reviews')}
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <select value={language} onChange={handleLanguageChange} className="language-select">
                  <option value="en">English</option>
                  <option value="fr">French</option>
                </select>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fields" element={<FieldsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </div>
        <footer className="footer bg-dark text-white text-center py-3">
          <Container>
            <p>Location: Greatest Kicks, 185 Lees Avenue, Ottawa, ON K15 5JB</p>
            <p>Phone: 613-262-0987</p>
            <p>Hours: Monday-Sunday: 8am-10pm</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
