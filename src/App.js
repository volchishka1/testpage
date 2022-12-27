
import './App.css';
import {Header} from "./components/header/header";
import {DescriptionOne} from "./components/descriptionOne/descriptionOne";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DescriptionOne />
    </div>
  );
}

export default App;
