import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {WelcomeComponent} from "./components/WelcomeComponent";
import { AddComponent } from './components/AddComponent';
import { UpdateComponent } from './components/UpdateComponent';
import { DeleteComponent } from './components/DeleteComponent';
import { SearchComponent } from './components/SearchComponent';
import { TotalComponent } from './components/TotalComponent';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<WelcomeComponent />}></Route>
            <Route path="/add" element={<AddComponent />}></Route>
            <Route path="/edit" element={<UpdateComponent />}></Route>
            <Route path="/search" element={<SearchComponent />}></Route>
            <Route path="/remove" element={<DeleteComponent />}></Route>
            <Route path="/totalProd" element={<TotalComponent />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
