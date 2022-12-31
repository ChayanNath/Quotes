import { Redirect, Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AddNewQuote from "./pages/AddNewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/quotes/:quoteid">
            <QuoteDetails></QuoteDetails>
          </Route>
          <Route path="/new-quote">
            <AddNewQuote></AddNewQuote>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
