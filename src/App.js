import './App.css';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/home';
import Tournamentpage from './components/tournament-page';
import Profilepage from './components/profile_page';
import Profilepageposts from './components/profile_page_posts';
import Profilepagegames from './components/profile_page_games';
function App() {
  return (
    <>
     <Router>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/tournaments" element={ <Tournamentpage/> } />
        <Route path="/profile" element={ <Profilepage/> } />
        <Route path="/profile/posts" element={ <Profilepageposts/> } />
        <Route path="/profile/games" element={ <Profilepagegames/> } />


      </Routes></Router>
   </>
  );
}

export default App;
