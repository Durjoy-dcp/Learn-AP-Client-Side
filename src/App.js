import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import AllCourse from './Components/AllCourse/AllCourse';
import CatagoryCourse from './Components/CatagoryCourse/CatagoryCourse';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Login from './Components/Shared/Login/Login';

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
          path: '/login',
          element: <Login></Login>
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
        {
          path: '/catagorycourses/:id',
          element: <CatagoryCourse ></CatagoryCourse>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/courses/${params.id}`);
          }
        },
        {
          path: '/course/:id',
          element: <CourseDetails ></CourseDetails>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/course/${params.id}`);
          }
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
