import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router';
import { Provider } from 'react-redux';
// constants
import Routes from '@constants/routes';
// redux
import { store, persistor } from '@redux/store';
// components
import Layout from '@components/Layout';
import Projects from '@views/Projects';
import Clients from '@views/Clients';
import Settings from '@views/Settings';
// style
import './style/globals.css';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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

          <Route
            index
            path={Routes.Clients}
            element={
              <Layout>
                <Clients />
              </Layout>
            }
          />

          <Route
            index
            path={Routes.Settings}
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />
        </RouterRoutes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
