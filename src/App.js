import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import User from './pages/User'
import UserDetail from './pages/UserDetail'
import AppLayout from "./pages/AppLayout";
import { getAllUser, getSelectedUser } from "./services/apiUsers";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/user',
        element: <User />,
        loader: getAllUser
      },
      {
        path: '/user/:id',
        element: <UserDetail />,
        loader: getSelectedUser
      }
    
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
