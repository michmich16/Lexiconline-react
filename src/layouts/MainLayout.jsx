import { Outlet, useLocation } from "react-router-dom";
import style from './MainLayout.module.scss';
import { useEffect } from "react";
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Cookies } from '../components/Cookies/Cookies';

export const MainLayout = () => {
  const location = useLocation();
   const targetLatitude = 57.048211;
   const targetLongitude = 9.968610;
  const radius = 2000; // Radius in meters (2km)

  // Function to calculate the distance between two geographic points
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radius of Earth in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  }

  useEffect(() => {
    // Update page title when location changes
    document.title = location.pathname.slice(1);
  }, [location]);

  // Check the user's location
  function success(position) {
    console.log(position);
    const { latitude, longitude } = position.coords;
    const distance = calculateDistance(latitude, longitude, targetLatitude, targetLongitude);

    if (distance <= radius) {
      console.log("LOCATION OK?", true);
    } else {
      console.log("LOCATION OK?", false);
    }
  }

  function error() {
    console.log("Unable to retrieve location.");
  }

  // Request the user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <Cookies />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
