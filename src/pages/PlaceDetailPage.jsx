import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const {id} = useParams();
  const [place,setPlace] = useState(null);


  const handleSetPlace = (data)=>{
    setPlace(data)
    console.log("place state" , place)
  }

  const fetchData = async ()=>{
    const response = await fetch(`http://localhost:3000/state/`+id);
    const data = await response.json();

    console.log("DETAil page " ,data);
    handleSetPlace(data)

  }
    
  useEffect(() => {
    if (!id) {
      return;
    }
    // axios.get(`/places/${id}`).then(response => {
    //   setPlace(response.data);
    // });

    fetchData();

  }, []);

  


  return (

    <>
     
     {
      place && <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.name}</h1>
      <AddressLink>{place.capital}</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.about}
          </div>
          
          <div  className="py-8">
         <span className="font-bold">Opening Time : </span>  {" 8:30 AM"}<br />
         <span className="font-bold"> Closing Time :  </span> {" 9:00 PM"}<br />
         <span className="font-bold">  Dailty Visitors :  </span> {"10,553"}
          </div>
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
      </div>
    </div>
     }

   </>
  );
}
