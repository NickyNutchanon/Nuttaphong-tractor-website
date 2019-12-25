import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { Home } from './component/Home'
import { About } from './component/About'
import { Project } from './component/Project'
import { History } from './component/History'
import { Service } from './component/Service'
import { Contact } from './component/Contact'
import { ProjectDetails } from './component/ProjectDetails'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { en } from "./data/en"
import { th } from "./data/th"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      th
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });



function AppRouter() {
  const { t } = useTranslation();
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">{t('Home')}</Link>
          <Link to="/about/" className="nav-link">{t('About')}</Link>
          <Link to="/history/" className="nav-link">{t('History')}</Link>
          <Link to="/project/" className="nav-link">{t('Project')}</Link>
          <Link to="/service/" className="nav-link">{t('Service')}</Link>
          <Link to="/contact/" className="nav-link">{t('Contact')}</Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => i18n.changeLanguage('en')}>EN</Nav.Link>
          <Nav.Link onClick={() => i18n.changeLanguage('th')}>TH</Nav.Link>
        </Nav>
      </Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/history/" component={History} />
      <Route path="/Project/" exact component={Project} />
      <Route path="/Service/" component={Service} />
      <Route path="/Contact/" component={Contact} />
      <Route path={`/Project/:id`} component={ProjectDetails} />
    </Router>

  );
}

export default AppRouter;