
import PaymentSuccess from "./components/PaymentSuccess";
import AccountNav from "./components/AccountNav";

const Ticket = () => {
  return (
   <>
   <AccountNav />
   
   <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">Raat Ke Afsane : Heritage Walk in Qutub Minar</h3>
      
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-2xl font-extrabold">₹ 450</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {/* Icon */}
          <h1>Name : Xyz</h1>
          <h2>Date : 25/9/23</h2>
          <h2>Timing : 5Pm - 7 Pm</h2>
         
        </li>
        
      
        
       
      </ul>
      <a
        href="#"
        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Get started
      </a>

      <PaymentSuccess />
    </div>
   </>
  );
};

export default Ticket;
