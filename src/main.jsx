import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import JobDetails from './JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          const [categoriesRes, jobsRes] = await Promise.all([fetch('../public/categories.json'), fetch('../public/jobs.json')])
          const categories = await categoriesRes.json();
          const jobs = await jobsRes.json();
          return { categories, jobs }
        }
      },
      {
        path: '/details',
        element: <JobDetails></JobDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
