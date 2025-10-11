import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import QR from './pages/QR';

// Детальні сторінки
import SamwashQR from './pages/solutions/SamwashQR';
import SamwashQRProject from './pages/projects/SamwashQR';
import AutomotiveCarWashQR from './pages/industries/AutomotiveCarWashQR';

// Детальні сторінки проєктів
import CarWashProject from './pages/projects/CarWash';
import VendingProject from './pages/projects/Vending';
import DronesProject from './pages/projects/Drones';
import LoyaltyCRMProject from './pages/projects/LoyaltyCRM';
import EcommerceProject from './pages/projects/Ecommerce';
import EnergyProject from './pages/projects/Energy';
import LembergFlowersProject from './pages/projects/LembergFlowers';
import PlantPolProject from './pages/projects/PlantPol';
import UsaUaProject from './pages/projects/UsaUa';
import GnizdoProject from './pages/projects/Gnizdo';
import LassoAiProject from './pages/projects/LassoAi';
import HostelBookingProject from './pages/projects/HostelBooking';

// Нові детальні сторінки рішень
import CarWashes from './pages/solutions/CarWashes';
import AlcoholVending from './pages/solutions/AlcoholVending';
import Drones from './pages/solutions/Drones';
import Ecommerce from './pages/solutions/Ecommerce';
import IoTSCADA from './pages/solutions/IoTSCADA';
import Marketing from './pages/solutions/Marketing';
import ProjectSourcing from './pages/solutions/ProjectSourcing';

// Детальні сторінки індустрій
import AutomotiveIndustry from './pages/industries/Automotive';
import VendingIndustry from './pages/industries/Vending';
import FintechIndustry from './pages/industries/Fintech';
import EnergyIndustry from './pages/industries/Energy';
import RetailIndustry from './pages/industries/Retail';
import LogisticsIndustry from './pages/industries/Logistics';
import IoTIndustry from './pages/industries/IoT';
import MarketingIndustry from './pages/industries/Marketing';
import ErrorPage from './pages/ErrorPage';
import Audit from './pages/Audit';
import ThankYou from './pages/ThankYou';
import Book from './pages/Book';

const withLayout = (element: React.ReactNode) => <App>{element}</App>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: withLayout(<ErrorPage locale="uk" />),
    children: [
      { index: true, element: withLayout(<Home locale="uk" />) },
      { path: 'about', element: withLayout(<About locale="uk" />) },
      { path: 'solutions', element: withLayout(<Solutions locale="uk" />) },
      { path: 'projects', element: withLayout(<Projects locale="uk" />) },
      { path: 'industries', element: withLayout(<Industries locale="uk" />) },
      { path: 'contact', element: withLayout(<Contact locale="uk" />) },
      { path: 'qr', element: withLayout(<QR locale="uk" />) },
      { path: 'audit', element: withLayout(<Audit locale="uk" />) },
      { path: 'thank-you', element: withLayout(<ThankYou />) },
      { path: 'book', element: withLayout(<Book locale="uk" />) },

      // Детальні сторінки (UK)
      { path: 'solutions/samwash-qr', element: withLayout(<SamwashQR />) },
      { path: 'solutions/car-washes', element: withLayout(<CarWashes />) },
      { path: 'solutions/alcohol-vending', element: withLayout(<AlcoholVending />) },
      { path: 'solutions/drones', element: withLayout(<Drones />) },
      { path: 'solutions/ecommerce', element: withLayout(<Ecommerce />) },
      { path: 'solutions/iot-scada', element: withLayout(<IoTSCADA />) },
      { path: 'solutions/marketing', element: withLayout(<Marketing />) },
      { path: 'solutions/project-sourcing', element: withLayout(<ProjectSourcing />) },

      // Проєкти (UK)
      { path: 'projects/samwash-qr', element: withLayout(<SamwashQRProject />) },
      { path: 'projects/car-wash', element: withLayout(<CarWashProject />) },
      { path: 'projects/vending', element: withLayout(<VendingProject />) },
      { path: 'projects/drones', element: withLayout(<DronesProject />) },
      { path: 'projects/loyalty-crm', element: withLayout(<LoyaltyCRMProject />) },
      { path: 'projects/ecommerce', element: withLayout(<EcommerceProject />) },
      { path: 'projects/energy', element: withLayout(<EnergyProject />) },
      { path: 'projects/plantpol', element: withLayout(<PlantPolProject />) },
      { path: 'projects/lemberg-flowers', element: withLayout(<LembergFlowersProject />) },
      { path: 'projects/usa-ua', element: withLayout(<UsaUaProject />) },
      { path: 'projects/gnizdo', element: withLayout(<GnizdoProject />) },
      { path: 'projects/lasso-ai', element: withLayout(<LassoAiProject />) },
      { path: 'projects/hostel-booking', element: withLayout(<HostelBookingProject />) },

      { path: 'industries/automotive/car-wash-qr', element: withLayout(<AutomotiveCarWashQR />) },

      // Індустрії (UK)
      { path: 'industries/automotive', element: withLayout(<AutomotiveIndustry />) },
      { path: 'industries/vending', element: withLayout(<VendingIndustry />) },
      { path: 'industries/fintech', element: withLayout(<FintechIndustry />) },
      { path: 'industries/energy', element: withLayout(<EnergyIndustry />) },
      { path: 'industries/retail', element: withLayout(<RetailIndustry />) },
      { path: 'industries/logistics', element: withLayout(<LogisticsIndustry />) },
      { path: 'industries/iot', element: withLayout(<IoTIndustry />) },
      { path: 'industries/marketing', element: withLayout(<MarketingIndustry />) }
    ]
  },
  {
    path: '/en',
    element: <Outlet />,
    errorElement: withLayout(<ErrorPage locale="en" />),
    children: [
      { index: true, element: withLayout(<Home locale="en" />) },
      { path: 'about', element: withLayout(<About locale="en" />) },
      { path: 'solutions', element: withLayout(<Solutions locale="en" />) },
      { path: 'projects', element: withLayout(<Projects locale="en" />) },
      { path: 'industries', element: withLayout(<Industries locale="en" />) },
      { path: 'contact', element: withLayout(<Contact locale="en" />) },
      { path: 'qr', element: withLayout(<QR locale="en" />) },
      { path: 'audit', element: withLayout(<Audit locale="en" />) },
      { path: 'thank-you', element: withLayout(<ThankYou />) },
      { path: 'book', element: withLayout(<Book locale="en" />) },

      // Детальні сторінки (EN prefix)
      { path: 'solutions/samwash-qr', element: withLayout(<SamwashQR />) },
      { path: 'solutions/car-washes', element: withLayout(<CarWashes />) },
      { path: 'solutions/alcohol-vending', element: withLayout(<AlcoholVending />) },
      { path: 'solutions/drones', element: withLayout(<Drones />) },
      { path: 'solutions/ecommerce', element: withLayout(<Ecommerce />) },
      { path: 'solutions/iot-scada', element: withLayout(<IoTSCADA />) },
      { path: 'solutions/marketing', element: withLayout(<Marketing />) },
      { path: 'solutions/project-sourcing', element: withLayout(<ProjectSourcing />) },

      // Проєкти (EN prefix)
      { path: 'projects/samwash-qr', element: withLayout(<SamwashQRProject />) },
      { path: 'projects/car-wash', element: withLayout(<CarWashProject />) },
      { path: 'projects/vending', element: withLayout(<VendingProject />) },
      { path: 'projects/drones', element: withLayout(<DronesProject />) },
      { path: 'projects/loyalty-crm', element: withLayout(<LoyaltyCRMProject />) },
      { path: 'projects/ecommerce', element: withLayout(<EcommerceProject />) },
      { path: 'projects/energy', element: withLayout(<EnergyProject />) },
      { path: 'projects/plantpol', element: withLayout(<PlantPolProject />) },
      { path: 'projects/lemberg-flowers', element: withLayout(<LembergFlowersProject />) },
      { path: 'projects/usa-ua', element: withLayout(<UsaUaProject />) },
      { path: 'projects/gnizdo', element: withLayout(<GnizdoProject />) },
      { path: 'projects/lasso-ai', element: withLayout(<LassoAiProject />) },
      { path: 'projects/hostel-booking', element: withLayout(<HostelBookingProject />) },

      { path: 'industries/automotive/car-wash-qr', element: withLayout(<AutomotiveCarWashQR />) },

      // Індустрії (EN prefix)
      { path: 'industries/automotive', element: withLayout(<AutomotiveIndustry />) },
      { path: 'industries/vending', element: withLayout(<VendingIndustry />) },
      { path: 'industries/fintech', element: withLayout(<FintechIndustry />) },
      { path: 'industries/energy', element: withLayout(<EnergyIndustry />) },
      { path: 'industries/retail', element: withLayout(<RetailIndustry />) },
      { path: 'industries/logistics', element: withLayout(<LogisticsIndustry />) },
      { path: 'industries/iot', element: withLayout(<IoTIndustry />) },
      { path: 'industries/marketing', element: withLayout(<MarketingIndustry />) }
    ]
  }
]);
