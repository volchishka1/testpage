import './App.css';
import {Header} from "./components/header/header";
import {DescriptionOne} from "./components/descriptionOne/descriptionOne";
import {Tools} from "./components/tools/tools";
import {Brand} from "./components/brand/brand";
import {Newcomer} from "./components/newcomer/newcomer";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DescriptionOne />
      <Tools />
      <Brand />
      <Newcomer />
    </div>
  );
}

export default App;
