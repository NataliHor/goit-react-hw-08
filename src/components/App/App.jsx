import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import Loyout from "../Layout/Layout";
import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RestrictedRoute = lazy(() =>
  import("../../pages/RestrictedRoute/RestrictedRoute")
);
const RegisterForm = lazy(() => import("../RegisterForm/RegisterForm"));
const PrivateRoute = lazy(() =>
  import("../../pages/PrivateRoute/PrivateRoute")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait, updating user info...</b>
  ) : (
    <Loyout>
      <Suspense fallback={<>Loading page...</>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterForm />} redirectTo="/" />
            }
          />
        </Routes>
      </Suspense>
    </Loyout>
  );
}

export default App;
