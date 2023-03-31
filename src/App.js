import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import router from './components/Layouts';

function App() {
  
  return (
    <div className='body-font font-Inter'>
      <RouterProvider router={router}></RouterProvider> 
  </div>
  );
}

export default App;
