import './App.css';
import Adress from './component/Adress';
import Name from './component/Name';
import ProfilePhoto from './component/ProfilePhoto';

function App() {
  return (
    <div className="body">
    <div className="App">
      <ProfilePhoto/>
      <Name/>
      <Adress/>
    </div>
    </div>
  );
}

export default App;
