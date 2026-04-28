import { Routes as RRoutes, Route } from 'react-router';
import { PAGE_PATH } from '../constants';
import { LoginPage } from '../../auth/pages';

export function Routes() {
  return (
    <RRoutes>
      <Route path={PAGE_PATH.LOGIN} element={<LoginPage />} />
    </RRoutes>
  );
}
