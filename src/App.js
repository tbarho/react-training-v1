import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthContext, AuthProvider } from './context/auth';

import Login from './screens/Login';
import ProgramDetails from './screens/ProgramDetails';

import Menu from './components/Menu';

function GetStarted() {
  return <div>GetStarted</div>;
}

function YouWillNeed() {
  return <div>YouWillNeed</div>;
}
function Home() {
  const { username } = useContext(AuthContext);
  return <div>Home, {username}</div>;
}
function Workout() {
  return <div>Workout</div>;
}
function Exercise() {
  return <div>Exercise</div>;
}
function MissedReps() {
  return <div>MissedReps</div>;
}
function StartingWeight() {
  return <div>StartingWeight</div>;
}
function CheckReps() {
  return <div>CheckReps</div>;
}
function FoundWeight() {
  return <div>FoundWeight</div>;
}

function Routes() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      {loggedIn ? (
        <>
          <Route path="/program-details">
            <ProgramDetails />
          </Route>
          <Route path="/you-will-need">
            <YouWillNeed />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
          <Route path="/missed-reps">
            <MissedReps />
          </Route>
          <Route path="/starting-weight">
            <StartingWeight />
          </Route>
          <Route path="/check-reps">
            <CheckReps />
          </Route>
          <Route path="/found-weight">
            <FoundWeight />
          </Route>
          <Route exact path="/">
            <GetStarted />
          </Route>
        </>
      ) : null}
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menu />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
