import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>COFORGE MYTASK APPLICATION</h1>
       
      </header>
      <section>
        <TodoList></TodoList>
      </section>
    </div>
  );
}

export default App;
