import { Routes as RRoutes, Route } from 'react-router';
import { PAGE_PATH } from '../constants';
import { LoginPage } from '../../auth/pages';
import { DashboardPage } from '../../dashboard/pages';
import { DashboardLayout } from '../components/layouts';

export function Routes() {
  return (
    <RRoutes>
      <Route path={PAGE_PATH.LOGIN} element={<LoginPage />} />

      <Route element={<DashboardLayout />}>
        <Route path={PAGE_PATH.DASHBOARD} element={<DashboardPage />} />
      </Route>
    </RRoutes>
  );
}
