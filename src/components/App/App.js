import './App.css';
import Folder from '../Folder/Folder';
import fileStructure from '../../data/structure';

function App() {
  return (
    <div className="App">
      <Folder structure={fileStructure} />
    </div>
  );
}

export default App;
