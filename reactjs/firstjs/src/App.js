import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Footer from "./component/Footer";



function App() {
  return (
    <>
      <Navbar tita="first.js" mode='dark' />
      <Textform la="password" heading="this is the heading"/> 
       <Footer/>

      
    </>
  );
}

export default App;
