import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';
import LoadingSpinner from './components/LoadingSpinner';

// Eager load critical pages (Home, Error)
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

// Lazy load all other pages for better performance
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Projects = lazy(() => import('./pages/Projects'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
const QR = lazy(() => import('./pages/QR'));
const Audit = lazy(() => import('./pages/Audit'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Book = lazy(() => import('./pages/Book'));

// Детальні сторінки рішень
const SamwashQR = lazy(() => import('./pages/solutions/SamwashQR'));
const CarWashes = lazy(() => import('./pages/solutions/CarWashes'));
const AlcoholVending = lazy(() => import('./pages/solutions/AlcoholVending'));
const Drones = lazy(() => import('./pages/solutions/Drones'));
const Ecommerce = lazy(() => import('./pages/solutions/Ecommerce'));
const IoTSCADA = lazy(() => import('./pages/solutions/IoTSCADA'));
const Marketing = lazy(() => import('./pages/solutions/Marketing'));
const ProjectSourcing = lazy(() => import('./pages/solutions/ProjectSourcing'));

// Детальні сторінки проєктів
const SamwashQRProject = lazy(() => import('./pages/projects/SamwashQR'));
const CarWashProject = lazy(() => import('./pages/projects/CarWash'));
const VendingProject = lazy(() => import('./pages/projects/Vending'));
const DronesProject = lazy(() => import('./pages/projects/Drones'));
const LoyaltyCRMProject = lazy(() => import('./pages/projects/LoyaltyCRM'));
const EcommerceProject = lazy(() => import('./pages/projects/Ecommerce'));
const EnergyProject = lazy(() => import('./pages/projects/Energy'));
const LembergFlowersProject = lazy(() => import('./pages/projects/LembergFlowers'));
const PlantPolProject = lazy(() => import('./pages/projects/PlantPol'));
const UsaUaProject = lazy(() => import('./pages/projects/UsaUa'));
const GnizdoProject = lazy(() => import('./pages/projects/Gnizdo'));
const LassoAiProject = lazy(() => import('./pages/projects/LassoAi'));
const HostelBookingProject = lazy(() => import('./pages/projects/HostelBooking'));
const AreasCodeProject = lazy(() => import('./pages/projects/AreasCode'));
const GustEnergyProject = lazy(() => import('./pages/projects/GustEnergy'));
const PaollaProject = lazy(() => import('./pages/projects/Paolla'));

// Детальні сторінки індустрій
const AutomotiveCarWashQR = lazy(() => import('./pages/industries/AutomotiveCarWashQR'));
const AutomotiveIndustry = lazy(() => import('./pages/industries/Automotive'));
const VendingIndustry = lazy(() => import('./pages/industries/Vending'));
const FintechIndustry = lazy(() => import('./pages/industries/Fintech'));
const EnergyIndustry = lazy(() => import('./pages/industries/Energy'));
const RetailIndustry = lazy(() => import('./pages/industries/Retail'));
const LogisticsIndustry = lazy(() => import('./pages/industries/Logistics'));
const IoTIndustry = lazy(() => import('./pages/industries/IoT'));
const MarketingIndustry = lazy(() => import('./pages/industries/Marketing'));

const withLayout = (element: React.ReactNode) => (
  <App>
    <Suspense fallback={<LoadingSpinner />}>
      {element}
    </Suspense>
  </App>
);

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
      { path: 'solutions/samwash-qr', element: withLayout(<SamwashQR locale="uk" />) },
      { path: 'solutions/car-washes', element: withLayout(<CarWashes locale="uk" />) },
      { path: 'solutions/alcohol-vending', element: withLayout(<AlcoholVending locale="uk" />) },
      { path: 'solutions/drones', element: withLayout(<Drones locale="uk" />) },
      { path: 'solutions/ecommerce', element: withLayout(<Ecommerce locale="uk" />) },
      { path: 'solutions/iot-scada', element: withLayout(<IoTSCADA locale="uk" />) },
      { path: 'solutions/marketing', element: withLayout(<Marketing locale="uk" />) },
      { path: 'solutions/project-sourcing', element: withLayout(<ProjectSourcing locale="uk" />) },

      // Проєкти (UK)
      { path: 'projects/samwash-qr', element: withLayout(<SamwashQRProject locale="uk" />) },
      { path: 'projects/car-wash', element: withLayout(<CarWashProject locale="uk" />) },
      { path: 'projects/vending', element: withLayout(<VendingProject locale="uk" />) },
      { path: 'projects/drones', element: withLayout(<DronesProject locale="uk" />) },
      { path: 'projects/loyalty-crm', element: withLayout(<LoyaltyCRMProject locale="uk" />) },
      { path: 'projects/ecommerce', element: withLayout(<EcommerceProject locale="uk" />) },
      { path: 'projects/energy', element: withLayout(<EnergyProject locale="uk" />) },
      { path: 'projects/plantpol', element: withLayout(<PlantPolProject locale="uk" />) },
      { path: 'projects/lemberg-flowers', element: withLayout(<LembergFlowersProject locale="uk" />) },
      { path: 'projects/usa-ua', element: withLayout(<UsaUaProject locale="uk" />) },
      { path: 'projects/gnizdo', element: withLayout(<GnizdoProject locale="uk" />) },
      { path: 'projects/lasso-ai', element: withLayout(<LassoAiProject locale="uk" />) },
      { path: 'projects/hostel-booking', element: withLayout(<HostelBookingProject locale="uk" />) },
      { path: 'projects/areascode', element: withLayout(<AreasCodeProject locale="uk" />) },
      { path: 'projects/gust-energy', element: withLayout(<GustEnergyProject locale="uk" />) },
      { path: 'projects/paolla', element: withLayout(<PaollaProject locale="uk" />) },

      { path: 'industries/automotive/car-wash-qr', element: withLayout(<AutomotiveCarWashQR locale="uk" />) },

      // Індустрії (UK)
      { path: 'industries/automotive', element: withLayout(<AutomotiveIndustry locale="uk" />) },
      { path: 'industries/vending', element: withLayout(<VendingIndustry locale="uk" />) },
      { path: 'industries/fintech', element: withLayout(<FintechIndustry locale="uk" />) },
      { path: 'industries/energy', element: withLayout(<EnergyIndustry locale="uk" />) },
      { path: 'industries/retail', element: withLayout(<RetailIndustry locale="uk" />) },
      { path: 'industries/logistics', element: withLayout(<LogisticsIndustry locale="uk" />) },
      { path: 'industries/iot', element: withLayout(<IoTIndustry locale="uk" />) },
      { path: 'industries/marketing', element: withLayout(<MarketingIndustry locale="uk" />) }
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
      { path: 'solutions/samwash-qr', element: withLayout(<SamwashQR locale="en" />) },
      { path: 'solutions/car-washes', element: withLayout(<CarWashes locale="en" />) },
      { path: 'solutions/alcohol-vending', element: withLayout(<AlcoholVending locale="en" />) },
      { path: 'solutions/drones', element: withLayout(<Drones locale="en" />) },
      { path: 'solutions/ecommerce', element: withLayout(<Ecommerce locale="en" />) },
      { path: 'solutions/iot-scada', element: withLayout(<IoTSCADA locale="en" />) },
      { path: 'solutions/marketing', element: withLayout(<Marketing locale="en" />) },
      { path: 'solutions/project-sourcing', element: withLayout(<ProjectSourcing locale="en" />) },

      // Проєкти (EN prefix)
      { path: 'projects/samwash-qr', element: withLayout(<SamwashQRProject locale="en" />) },
      { path: 'projects/car-wash', element: withLayout(<CarWashProject locale="en" />) },
      { path: 'projects/vending', element: withLayout(<VendingProject locale="en" />) },
      { path: 'projects/drones', element: withLayout(<DronesProject locale="en" />) },
      { path: 'projects/loyalty-crm', element: withLayout(<LoyaltyCRMProject locale="en" />) },
      { path: 'projects/ecommerce', element: withLayout(<EcommerceProject locale="en" />) },
      { path: 'projects/energy', element: withLayout(<EnergyProject locale="en" />) },
      { path: 'projects/plantpol', element: withLayout(<PlantPolProject locale="en" />) },
      { path: 'projects/lemberg-flowers', element: withLayout(<LembergFlowersProject locale="en" />) },
      { path: 'projects/usa-ua', element: withLayout(<UsaUaProject locale="en" />) },
      { path: 'projects/gnizdo', element: withLayout(<GnizdoProject locale="en" />) },
      { path: 'projects/lasso-ai', element: withLayout(<LassoAiProject locale="en" />) },
      { path: 'projects/hostel-booking', element: withLayout(<HostelBookingProject locale="en" />) },
      { path: 'projects/areascode', element: withLayout(<AreasCodeProject locale="en" />) },
      { path: 'projects/gust-energy', element: withLayout(<GustEnergyProject locale="en" />) },
      { path: 'projects/paolla', element: withLayout(<PaollaProject locale="en" />) },

      { path: 'industries/automotive/car-wash-qr', element: withLayout(<AutomotiveCarWashQR locale="en" />) },

      // Індустрії (EN prefix)
      { path: 'industries/automotive', element: withLayout(<AutomotiveIndustry locale="en" />) },
      { path: 'industries/vending', element: withLayout(<VendingIndustry locale="en" />) },
      { path: 'industries/fintech', element: withLayout(<FintechIndustry locale="en" />) },
      { path: 'industries/energy', element: withLayout(<EnergyIndustry locale="en" />) },
      { path: 'industries/retail', element: withLayout(<RetailIndustry locale="en" />) },
      { path: 'industries/logistics', element: withLayout(<LogisticsIndustry locale="en" />) },
      { path: 'industries/iot', element: withLayout(<IoTIndustry locale="en" />) },
      { path: 'industries/marketing', element: withLayout(<MarketingIndustry locale="en" />) }
    ]
  }
]);
