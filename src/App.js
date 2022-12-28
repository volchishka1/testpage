import './App.css';
import {Header} from "./components/header/header";
import {DescriptionOne} from "./components/descriptionOne/descriptionOne";
import {Tools} from "./components/tools/tools";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DescriptionOne />
      <Tools />
    </div>
  );
}

export default App;
