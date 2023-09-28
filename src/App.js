import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import './App.css';
import Table from './components/pages/Table';
import Pagination from './components/pages/Pagination';
import User from './components/pages/User';
import Search from './components/pages/Search';
import Show from './components/pages/Show';
import {characters} from './components/pages/characters';


class App extends Component {

    removeCharacter = ( index )=> {
        const {characters} = this.state
        let filtered = characters.filter((character, i) => {
            return i !== index
        });
        this.setState({characters:filtered})
    }
    
    render() {
        return (
            <Router>
                {/* <div className="App">  
                <ul className="App-header">  
                    <li><Link to="/">Home</Link></li>  
                    <li><Link to="/about">About Us</Link></li>  
                    <li><Link to="/contact">Contact Us</Link></li>  
                    <li><Link to="/table">Table</Link></li>  
                </ul>  
          </div>   */}

                <nav className="navbar navbar-expand-sm bg-primary">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/table">Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pagination">Pagination</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user">User Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/show">Show</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                    <Route exact path='/table' element={< Table charactersData={characters} />}></Route>
                    <Route exact path='/pagination' element={< Pagination />}></Route>
                    <Route exact path='/user' element={< User />}></Route>
                    <Route exact path='/search' element={< Search />}></Route>
                    <Route exact path='/show' element={< Show />}></Route>
                </Routes>
            </Router>
        );
    }
}
export default App;  