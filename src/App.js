import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quote/:quoteId">
          <Quote />
        </Route>
        <Route path="/quotes/new">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
