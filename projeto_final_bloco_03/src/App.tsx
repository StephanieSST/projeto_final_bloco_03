import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './home/Home'

function App() {
  return (
    <>
       <BrowserRouter>
          <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                 <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
           
        </>
    )
}

export default App