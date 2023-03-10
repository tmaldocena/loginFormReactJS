import logo from './logo.svg';
import './App.css';
import ToDoContainer from './components/containers/ToDoContainer';
import ToDoFormContainer from './components/containers/ToDoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FilterOptions></FilterOptions>
        <ToDoContainer></ToDoContainer>
        <ToDoFormContainer></ToDoFormContainer>
      </header>
    </div>
  );
}

export default App;
