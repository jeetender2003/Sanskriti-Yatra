import { useEffect, useState } from "react";

const products = [
    {
      id: 1,
      name: 'Raat Ke Afsane : Heritage Walk in Qutub Minar',
      href: '#',
      location: 'Qutab Minar, Delhi',
      price: '₹400.00',
      timing: "Sun, 17 – Tue, 19 Sept",
      imageSrc: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1693415690%2Fsalxgc0osjahurgm05dv.png',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Kalbelia Dance Festival',
      href: '#',
      location: 'Rajasthan',
      price: '₹150.00',
      timing: "Tue, 19 – Fri, 22 Sept",
      imageSrc: 'https://www.hlimg.com/images/events/738X538/event_1528527381m1.jpg?w=600&dpr=1.5',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },

    {
        id: 3,
        name: 'Tawaifs & Kothas : Heritage Walk in Old Delhi',
        href: '#',
        location: 'CHAWRI BAZAR, Delhi',
        price: '₹600.00',
        timing: "Sun, 17 – Tue, 19 Sept",
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2M7FhRyj1yNj-zhUGF7qnvOtiCtP2zLkVhJHQHpbe5w&s',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
      },
      {
        id: 4,
        name: 'Exploring Lodhi Art District On Yulu Bikes : Heritage Walk',
        href: '#',
        location: 'New Delhi, Delhi',
        price: '₹350.00',
        timing: "Tue, 19 – Fri, 22 Sept",
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86QQkzvTN7i5ylYh-DlxO6OXZ89MKbdj1BUaLcFlCow&s',
        imageAlt:
          'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      },
    // More products...
  ]



const TripCart  = ()=>{

    const [places,setPlaces] = useState([]);

  const fetchData = async ()=>{
    const response = await fetch('https://backendsy-0282.onrender.com/state');
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
    
 return(
    <div className="mt-8">
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="ml-4">{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.location}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Date : {product.timing}</p>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>

 );
}

export default TripCart;