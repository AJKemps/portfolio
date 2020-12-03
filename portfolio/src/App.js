import './App.scss';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
      <div className="App">
        <div className="App-container">
          <Header />
          <About />
          <Projects />
          <Footer />
        </div>
      </div>
    </HttpsRedirect>
  );
}

export default App;
