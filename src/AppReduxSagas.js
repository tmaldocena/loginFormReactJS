import logo from './logo.svg';
import './App.css';
import ToDoContainer from './components/containers/ToDoContainer';
import ToDoFormContainer from './components/containers/ToDoFormContainer';
import FilterOptions from './components/pure/FilterOptions';
import LoginFormContainer from './components/containers/LoginFormContainer';

function AppReduxSagas() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginFormContainer></LoginFormContainer>
      </header>
    </div>
  );
}

export default AppReduxSagas;
