import {Link, useParams} from "react-router-dom";
import AccountNav from "../components/AccountNav";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import TripCart from "../components/TripCart";
export default function PlacesPage() {
  const [places,setPlaces] = useState([]);

  const fetchData = async ()=>{
    const response = await fetch('http://localhost:3000/state');
    const data = await response.json();
    setPlaces(data);

    console.log("Places", places)
    
    console.log("DATA", data)
  }
   useEffect(() => {
    // axios.get('/user-places').then(({data}) => {
    //   setPlaces(data);
  // });

    console.log("Feching data");
    fetchData();
    
  }, []);
  return (
    <div>
      <AccountNav />
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Create New Cultural Event Here
          </Link>
        </div>

        <TripCart />
        {/* <div className="mt-4">
          {places.length > 0 && places.map(place => (
            <Link to={'/account/places/'+place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
              <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
                <PlaceImg place={place} />
                <img src={place.img[1]} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.name}</h2>
                <p className="text-sm mt-2">{place.about}</p>
              </div>
            </Link>
          ))}
        </div> */}
    </div>
  );
}