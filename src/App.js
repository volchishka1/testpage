import './App.css';
import {Header} from "./components/header/header";
import {DescriptionOne} from "./components/descriptionOne/descriptionOne";
import {Tools} from "./components/tools/tools";
import {Brand} from "./components/brand/brand";
import {Newcomer} from "./components/newcomer/newcomer";
import {Testimonial} from "./components/testimonial/testimonial";
import {Join} from "./components/join/join";
import {Footer} from "./components/footer/footer";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DescriptionOne />
      <Tools />
      <Brand />
      <Newcomer />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
