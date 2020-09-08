import React from 'react';
import Header from './components/Header/Header.component.jsx';
import ABoutUs from './components/About-Us/About-Us.component.jsx';
// import Brand from './components/Brand/Brand.componenent.jsx';
import Services from './pages/Services/Services.page';
import Projectpage from './pages/projects/project.page';
//import Newsletter from './components/Newsletter/newsletter.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route, Switch } from 'react-router-dom';
import Blog from './pages/Blog/blog.page';
import Home from './pages/Home/Home.page';
import ContactUsPage from './pages/Contact-Us/Contact-Us.page';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={ABoutUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projectpage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={ContactUsPage} />
      </Switch>
      {/* 
      <Banner />
      <ABoutUs />
      <Features />
      <Portfolio />
      <Newsletter />*/}
      <Footer />
    </div>
  );
}

export default App;
