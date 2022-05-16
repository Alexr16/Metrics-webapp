import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Countries/:countryName" element={<CountriesPage />} /> */}
      </Routes>
    </Router>
  </div>
);

export default App;
