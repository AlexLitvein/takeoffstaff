import { AuthPage } from "pages/AuthPage";
import { ContactsPage } from "pages/ContactsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppSelector } from "store/reducers";

export enum RouteNames {
  CONTACTS = "contacts",
}

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.app);
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
