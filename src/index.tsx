import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router";
// constants
import Routes from "@constants/routes";
// components
import Layout from "@components/Layout";
import Projects from "@views/Projects";
// style
import "./style/globals.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RouterRoutes>
      <Route
        index
        path={Routes.Projects}
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
    </RouterRoutes>
  </BrowserRouter>
);
