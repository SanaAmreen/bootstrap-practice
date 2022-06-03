//import logo from './logo.svg';
import { Breadcrumb } from 'react-bootstrap';
import './App.css';
import BadgeBootStrap from './component/BooststrapPractice/BadgeBootStrap';
import BootstrapAccordian from './component/BooststrapPractice/BootstrapAccordian';
import BreadcrumbsBootstrap from './component/BooststrapPractice/BreadcrumbsBootsta';
import ButtonsBootstrap from './component/BooststrapPractice/ButtonsBootstrap';
import CardsBootstrap from './component/BooststrapPractice/CardsBootstrap';
import CarouselBoostrap from './component/BooststrapPractice/CarouselBoostrap';
import DropdownButtonBootstap from './component/BooststrapPractice/DropdownButtonBootstap';
import FigureBootstrap from './component/BooststrapPractice/FigureBootstrap';
//import ModalBootstrap from './component/BooststrapPractice/ModalBootstrap';
import NavbarBootstrap from './component/BooststrapPractice/NavbarBootstrap';

function App() {
  return (
    <div className="App">
      
     <BootstrapAccordian/>
     <BadgeBootStrap/>
     <BreadcrumbsBootstrap/>
     <ButtonsBootstrap/>
     <CardsBootstrap/>
     <CarouselBoostrap/>
     <DropdownButtonBootstap/>
     <FigureBootstrap/>
     <NavbarBootstrap/>
    </div>
  );
}

export default App;
