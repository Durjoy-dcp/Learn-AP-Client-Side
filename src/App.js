import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },

      ]
    }


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
