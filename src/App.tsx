import React from 'react';
import { Router } from '@reach/router';
import Route from './components/Route';
import Home from './routes/Home';
import Header from './components/Header';
import SearchHospitals from './routes/SearchHospitals';

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Route component={Home} path="/" />
                <Route component={SearchHospitals} path="/find/:radius" />
            </Router>
        </div>
    );
}

export default App;
