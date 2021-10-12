import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { Footer, Header, Main } from "./components/layout";
import LoginForm from "./views/LoginForm/LoginForm";
import TodoList from "./views/TodoList/TodoList";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route
            path="/"
            render={() => {
              return isUserLoggedIn ? <TodoList /> : <Redirect to="/login" />;
            }}
          />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
