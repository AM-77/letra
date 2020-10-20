import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './containers/Navbar/Navbar';
import Home from './pages/Home/Home';
import Lyrics from './pages/Lyrics/Lyrics';
import ArtistsList from './pages/ArtistsList/ArtistsList';
import Artist from './pages/Artist/Artist';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:artist" component={Artist} />
          <Route path="/artists/:start" component={ArtistsList} />
          <Route path="/lyrics/:artist/:track" component={Lyrics} />
          <Route path="/search/:lookingFor" component={Search} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
