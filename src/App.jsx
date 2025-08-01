import { Filter } from 'lucide-react';
import Main from './components/Main';
import SidePanel from './components/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
     <Main/>
     <ToastContainer
    enableMultiContainer
    position="top-center"
    
  />
    </div>
  )
}

export default App
