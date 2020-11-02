import "./App.scss";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
