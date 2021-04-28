import "./App.scss";
import Navbar from "../components/Navbar/Navbar";
import AuthPage from "../pages/authPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthPage />
    </div>
  );
}

export default App;
