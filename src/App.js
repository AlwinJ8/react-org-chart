import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<gig />} />
      </Routes>
    </Router>
  );
}

export default App;