import foodMenu from './data/foodMenu';
import Menu from './components/Menu';
import LandingPage from "./Pages/LandingPage";

function App() {

  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-primary to-secondary">
      <LandingPage />
      <Menu menu={foodMenu} />
    </div>
  );
}

export default App;
