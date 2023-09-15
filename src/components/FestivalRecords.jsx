const people = [
    {
      name: 'Ganesh Chaturthi',
      description: 'Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...',
      location: 'Mumbai, Maharashtra',
      imageUrl:
        "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      time: '3 PM ',
      date: '15/10/23',
    },


    {
        name: 'Ganesh Chaturthi',
        description: 'Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...',
        location: 'Mumbai, Maharashtra',
        imageUrl:
          "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        time: '3 PM ',
        date: '15/10/23',
      },



      {
        name: 'Ganesh Chaturthi',
        description: 'Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...',
        location: 'Mumbai, Maharashtra',
        imageUrl:
          "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        time: '3 PM ',
        date: '15/10/23',
      },


      {
        name: 'Ganesh Chaturthi',
        description: 'Ganesh Chaturthi, also known as Vinayak Chaturthi or Ganeshotsav...',
        location: 'Mumbai, Maharashtra',
        imageUrl:
          "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        time: '3 PM ',
        date: '15/10/23',
      },
   
  ]
  
  export default function FestivalRecords() {
    return (
      <ul location="list" className="divide-y divide-gray-100 ">
        <h1 className="font-bold text-3xl">Upcoming Festivals</h1>
        {people.map((person) => (
          <li key={person.description} className="flex justify-between gap-x-6 gap-y-6 py-5 px-5 my-5 hover:bg-gray-100 cursor-pointer ">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.description}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.location}</p>
              {person.time ? (
                <div>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                   <time dateTime={person.date}>Time {person.time } </time>
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    Date {person.date}
                </p>
                </div>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    )
  }
  