import HomePage from "./components/HomePage/HomePage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className='mx-auto max-w-[1200px]'>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
};

export default App;
