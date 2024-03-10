import LandingPage from "./component/LandingPage"
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import AddStrayPage from "./component/stray/AddStrayPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddStray from "./component/stray/AddStrayPage";
import StrayRecordsPage from "./component/stray/StrayRecordsPage";
import TreatmentRecordsPage from "./component/treatment/TreatmentRecordsPage";

function App() {

  return (
       <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<TreatmentRecordsPage  />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/addstray" element={<AddStrayPage />}></Route>
      </Routes>
   </div>
       </Router>
  );
}

export default App;
