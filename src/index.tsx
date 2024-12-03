import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// constants
import Routes from '@constants/routes';
// redux
import { store, persistor } from '@redux/store';
// components
import Layout from '@components/Layout';
import Projects from '@views/Projects';
import Clients from '@views/Clients';
import Settings from '@views/Settings';
import Register from '@views/Register/index';
// style
import './style/globals.css';

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
            path={Routes.Clients}
            element={
              <Layout>
                <Clients />
              </Layout>
            }
          />

          <Route
            path={Routes.Settings}
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />

          <Route path={Routes.Register} element={<Register />} />
        </RouterRoutes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
