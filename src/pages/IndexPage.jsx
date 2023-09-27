import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import PopularPlaces from "../components/PopularPlaces.jsx";
import Notice from "../components/Notice.jsx";
import EventsPage from "./EventsPage.jsx";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  const fetchData = async () => {

    
    const response = await fetch("https://backendsy-0282.onrender.com/state");
    const data = await response.json();
    setPlaces(data);


    console.log("Places", places);
    const { tourist } = data[0];
    console.log("NEW DDATA", data[0]);
  };

  useEffect(() => {
    // axios.get('/places').then(response => {
    //   setPlaces(response.data);
    // });


    fetchData();
  }, []);
  return (
    <>
      <Notice />
      <h1 className="mt-30 text-2xl font-bold tracking-tight text-gray-900">
        Popular Heritage Sites
      </h1>
      <div className="mt-8  mb-14 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={"/place/" + place.id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {/* {place.photos?.[0] && (
              <Image className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt=""/>
            )} */}
                <img src={place.img[1]} />
              </div>

              <h2 className="font-bold">{place.capital}</h2>
              <h3 className="text-sm text-gray-500 truncate">{place.about}</h3>
              <div className="mt-1">
                <span className="font-bold">${1000}</span> per night
              </div>
            </Link>
          ))}
      </div>

      <h1 className="mt-30 text-2xl font-bold tracking-tight text-gray-900">
       Popular Cultural Events
      </h1>
      <EventsPage />

      {places && (
        <div className="my-50">
          <PopularPlaces places={places} />
        </div>
      )}

      
    </>
  );
}
