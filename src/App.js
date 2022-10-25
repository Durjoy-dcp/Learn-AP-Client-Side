import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import AllCourse from './Components/AllCourse/AllCourse';

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
        {
          path: '/allcourses',
          element: <AllCourse></AllCourse>
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
