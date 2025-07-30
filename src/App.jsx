import Routings from './Rotings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
     <Routings/>
      <ToastContainer enableMultiContainer containerId="form-toast" />
    </div>
  )
}

export default App
