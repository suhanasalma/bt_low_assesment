
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';

function App() {
  return (
   <div className='max-w-screen-2xl mx-auto flex justify-center items-center min-h-screen'>
    <RouterProvider router={router} />
    <ToastContainer />
   </div>
  );
}

export default App;
