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
  const isUserLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/account" component={Account}>
            {isUserLoggedIn ? <Account /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/todo/:string" component={Todo}>
            {isUserLoggedIn ? <Todo /> : <Redirect to="/login" />}
          </Route>
          <Route exact strict path="/">
            {isUserLoggedIn ? <TodoList /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
