import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { Footer, Header, Main } from "./components/layout";
import LoginForm from "./views/LoginForm/LoginForm";
import Logout from "./views/Logout/Logout";
import Todo from "./views/Todo/Todo";
import TodoList from "./views/TodoList/TodoList";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/todo/:string" component={Todo} />
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
