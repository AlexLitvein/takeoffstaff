import LoginForm from "components/auth/LoginForm";
// import { RouteNames } from "initApp/init";
import { AuthPage } from "pages/AuthPage";
import { ContactsPage } from "pages/ContactsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppSelector } from "store/reducers";
// import { Main } from 'pages/Main';
// import { AuthForm } from 'components/Auth/AuthForm';
// import { appHelper, RouteNames } from 'appInit/init';
// import { PersonalArea } from 'pages/PersonalArea';
// import { TendersRouter } from './TendersRouter';
// import { ContractorsRouter } from './ContractorsRouter';
// import { PublicProfile } from 'pages/PublicProfile';
// import { useAppSelector } from 'store';

export enum RouteNames {
  CONTACTS = "contacts",
}

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.app);
  // appHelper.useRestoreScrollPos();

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path={RouteNames.CONTACTS} element={<ContactsPage />} />
        </>
      ) : null}

      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRouter;
