import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Books from './components/AllTheBooks';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import CustomizedNav from './components/Navbar';

function App() {
  return (
    <>
     <CustomizedNav />
     <Jumbotron color="yellow"/>
     <Books />
     <Footer backGroundColor="blue"/>
    </>
  );
}

export default App;
