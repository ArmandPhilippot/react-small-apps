import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { Footer, Header, Main } from "./components/layout";
import Account from "./views/Account/Account";
import LoginForm from "./views/LoginForm/LoginForm";
import Logout from "./views/Logout/Logout";
import Todo from "./views/Todo/Todo";
import TodoList from "./views/TodoList/TodoList";
import "modern-normalize";
import "./App.scss";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/account" component={Account}>
            {isLoggedIn ? <Account /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/todo/:string" component={Todo}>
            {isLoggedIn ? <Todo /> : <Redirect to="/login" />}
          </Route>
          <Route exact strict path="/">
            {isLoggedIn ? <TodoList /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
