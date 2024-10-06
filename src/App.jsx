import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from './Components/Hero/Hero.jsx';
import SupportedBy from './Components/SupportedBy/SupportedBy.jsx';
import BrandsCards from './Components/BrandsCards/BrandsCards.jsx';
import Bags from './Components/Bags/Bags.jsx';
import HoldingBags from './Components/HoldingBags/HoldingBags.jsx';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <BrandsCards />
      <Bags />
      <SupportedBy />
      <HoldingBags />
    </>
  )
}

export default App
