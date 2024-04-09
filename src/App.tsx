import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Register from "./pages/Register";
import Students from './pages/Students';
import GlobalStyle from "./styles";

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
