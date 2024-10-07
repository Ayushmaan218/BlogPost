import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar'
import Blogs from './components/Blogs';
import Post from './components/post';
import About from './components/About';
import Signin from './components/signin';
import Signup from './components/signup';


function App() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-blue-400 to-emerald-400'>
    <div className='App'>
      <Navbar/>
      
      <Routes>
      <Route path='/Frontend' element={<Navigate to='/blogs' />} /> {/* Redirect root to /blogs */}
        <Route path='/blogs' element =<Blogs/> />
        <Route path='/post' element =<Post/> />
        <Route path='/about' element =<About/> />
        <Route path='/signin' element =<Signin/> />
        <Route path='/signup' element =<Signup/> />
        
      </Routes>
    </div>
    </div>
  )
}
export default App