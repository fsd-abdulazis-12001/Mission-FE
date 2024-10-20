 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import BerandaPage from "./pages/beranda"
import DaftarSaya from "./pages/beranda/DaftarSaya";
import Series from "./pages/beranda/Series";
import Films from "./pages/beranda/Films";
import Profile from "./pages/auth/Profile";
import Langganan from "./pages/langganan";
import Payment from "./pages/payment";
import VideoPlayer from "./pages/videoplayer";

import RequireAuth from "@auth-kit/react-router/RequireAuth";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthGuard from "./component/auth/authGuard";
import Succes from "./pages/verification/Succes";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <RequireAuth fallbackPath={"/login"}><BerandaPage/></RequireAuth> ,
  },


  {
    path: "/login",
    element: <AuthGuard><LoginPage/></AuthGuard>,
  },
  {
    path: "/register",
    element: <AuthGuard><RegisterPage/></AuthGuard>,
  }
  ,
  {
    path: "/daftarsaya",
    element: <RequireAuth fallbackPath={"/login"}><DaftarSaya/></RequireAuth>,
  },
  {
    path: "/verify-email",
    element: <AuthGuard><Succes/></AuthGuard>,
  }
  ,
  
  {
    path: "/series",
    element: <RequireAuth fallbackPath={"/login"}><Series/></RequireAuth>,
  }
  ,
  {
    path: "/films",
    element: <RequireAuth fallbackPath={"/login"}><Films/></RequireAuth>,
  }
  ,
  {
    path: "/profile",
    element: <RequireAuth fallbackPath={"/login"}><Profile/></RequireAuth>,
  }
  ,
  {
    path: "/subscribe",
    element: <RequireAuth fallbackPath={"/login"}><Langganan/></RequireAuth>,
  }
  ,
  {
    path: "/payment/:id",
    element: <RequireAuth fallbackPath={"/login"}><Payment/></RequireAuth>,
  },
  {
    path: "/videoplayer",
    element: <RequireAuth fallbackPath={"/login"}><VideoPlayer/></RequireAuth>,
  }
]);
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
