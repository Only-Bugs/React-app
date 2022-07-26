import Navbar from "./components/navbar/navbar.component";
import LoginPage from "./routes/loginpage/login";

function App() {
  return (
    <div className="App">
      {/* navbar comp */}
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
