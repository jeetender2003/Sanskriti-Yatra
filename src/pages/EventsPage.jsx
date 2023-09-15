import { useEffect, useState } from "react";
import PopularPlaces from "../components/PopularPlaces";
import TripCart from "../components/TripCart";

const EventsPage = ()=>{

    const [places, setPlaces] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/state");
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

    return(
     <div>
         <div className="mb-10">
          
        <TripCart />
         </div>
        {places && (
        <div className="my-50">
          <PopularPlaces places={places} />
        </div>
      )}
     </div>
    )
}

export default EventsPage;