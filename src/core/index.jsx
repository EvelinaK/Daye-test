import { lazy, Suspense, createContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { publicPaths } from "../config/routes/routes";

import PublicRoute from "./PublicRoutes/PublicRoutes";
import LinearProgress from "@mui/material/LinearProgress";
import Loader from "../components/Loading/index"

const Home = lazy(() => import("../pages/homePage"));
const Products = lazy(() => import("../pages/productsPage"));

const publicRoutes = [
  { path: publicPaths.home, Component: <Home /> },
  { path: publicPaths.products, Component: <Products /> },
];


export const Theme = createContext(null)

const App = () => {

  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute>{route.Component}</PublicRoute>}
          />
        ))}
        <Route path="*" element={<Navigate to={publicPaths.home} replace />} />
        <Route
          exact
          path="/"
          element={<Navigate to={publicPaths.home} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
