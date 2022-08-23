import Navbar from "./Navbar";

import Product from './Product'
import Service from './Service'
import Home from './Home'
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Userz from "./Userz";
import AddUserz from "./AddUserz";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userz/>}/>
        <Route path="/AddUser" element= {<AddUserz/>} />
      </Routes>
    </Router>
  );
}

export default App;
