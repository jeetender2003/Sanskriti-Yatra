import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function PopularPlaces({ places }) {
  return (
    <div className="mt-455">
      {places.map((place) => (
        <div className="mb-50 mt-50">
          <div className="my-auto text-3xl font-bold w-full text-gray-900">
            <h1>{place.name}</h1>
          </div>
          <div className="mb-20 mt-8 grid gap-x-4 gap-y-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-3">
            {place.tourist.map((tour) => (
              <Link to={"/place/" + place.id}>
                <div className="bg-gray-500 mb-2 rounded-2xl flex block">
                  <img src={tour.images} />
                </div>

                <h2 className="font-bold">{tour.name}</h2>
                <h3 className="text-sm text-gray-500 truncate">{tour.info}</h3>
                <div className="mt-1">
                  Price <span className="font-bold"> {1000}</span>
                </div>
              </Link>
            ))}

            <Link className=" col-span-full flex justify-end hover:text-primary ">
              <h1>View more</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

const PlacesList = ({ place }) => {
  return <></>;
};

// export default function Example() {
//     return (
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (

//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
