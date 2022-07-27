import "./App.css";
import HomePage from "./components/HomePage";
import "./components/FontawaysomeIcons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpDetails from "./components/EmpDetails";
import EditUser from "./components/EditUser";

function App(props) {
  return (
    <div className="App">
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route exact path="/edit" element={<EditUser />}></Route>
          <Route
            path="/employees/:id"
            render={(props) => <EmpDetails {...props} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
