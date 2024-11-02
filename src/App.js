import './App.css';
import Footer from './components/Footer/footer';
import './components/Header/index'
import ReferralProgram from './components/Header/index';
import Content from './components/Content/content';
function App() {
  return (
    <div className="App">
      <ReferralProgram/>
      <Content/>
      <Footer></Footer>
    </div>
  );
}

export default App;
