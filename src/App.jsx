import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import {UserContextProvider} from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";
import { useEffect } from 'react';
import Ticket from './Ticket';
import PaymentSuccess from './components/PaymentSuccess';
import EventsPage from './pages/EventsPage';
import TripCart from './components/TripCart';
import VisitedEvent from './components/VisitedEvent';
import VisitedEventPage from './pages/VisistedEventPage';
import FestivalRecords from './components/FestivalRecords';
import UserDetail from './components/UserDetail';
import CulturalArtifacts from './components/CulturalArtifacts';
import CarouselIndicatorsInside from './components/Caro';

axios.defaults.baseURL = "http://localhost:4000/api";
 axios.defaults.withCredentials = true;



function App() {

  const getData = async ()=>{
    const response = await fetch("https://backendsy-0282.onrender.com/loc")
   const data = await response.json();
   console.log(data);

  }

  useEffect(()=>{
  getData();
  },[])
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
    
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlaceDetailPage />} />
          <Route path="/account/bookings" element={<Ticket />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />

          <Route path="/account/trips" element={<BookingsPage />} />
          <Route path="/account/visitedevents" element={<VisitedEventPage />} />
          <Route path= "/events" element  = {<EventsPage />} />
         
          <Route path="/tripcart" element = {<TripCart />} />
          <Route path="/festivals" element={<FestivalRecords />} />
          <Route path="/user" element={<UserDetail />} />
          <Route path="/artifacts" element={<CulturalArtifacts />} />
          <Route path="/try" element={<CarouselIndicatorsInside />} />
        </Route>
        <Route path="/paymentsuccessful" element={<PaymentSuccess />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
