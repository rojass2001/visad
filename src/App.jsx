import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div>
  
      <ToastContainer enableMultiContainer containerId="form-toast" />
      <Main/>
    </div>
  )
}

export default App
