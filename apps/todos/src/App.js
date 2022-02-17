import "modern-normalize";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header, Main } from "./components/layout";
import Account from "./views/Account/Account";
import LoginForm from "./views/LoginForm/LoginForm";
import Logout from "./views/Logout/Logout";
import Todo from "./views/Todo/Todo";
import TodoList from "./views/TodoList/TodoList";
import "./App.scss";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/account"
            element={
              isLoggedIn ? <Account /> : <Navigate replace to="/login" />
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/todo/:string"
            element={isLoggedIn ? <Todo /> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            strict
            path="/"
            element={
              isLoggedIn ? <TodoList /> : <Navigate replace to="/login" />
            }
          />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
