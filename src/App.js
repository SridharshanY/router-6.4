import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import User from './pages/User'
import UserDetail from './pages/UserDetail'
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/user/:id',
        element: <UserDetail />
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
