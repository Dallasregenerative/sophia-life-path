import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { AssessmentProvider } from "./context/AssessmentContext";
import WelcomePage from "./pages/welcome";
import AssessmentPage from "./pages/assessment";
function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={WelcomePage} />
      <Route path="/assessment" component={AssessmentPage} />
      <Route>
        <div className="min-h-screen bg-cream-50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-2xl text-gray-900">Page not found</h2>
            <a href="#/" className="text-rose-500 hover:text-rose-600 text-sm font-medium">
              Go back home
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <AssessmentProvider>
      <Router hook={useHashLocation}>
        <AppRouter />
      </Router>
    </AssessmentProvider>
  );
}

export default App;
