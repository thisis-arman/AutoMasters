// import { useEffect, useState } from "react";

const CarCards = ({ cars }) => {
    // const [cars, setCars] = useState([])

    /*  useEffect(() => {
         fetch('/public/car.json')
             .then(res => res.json())
             .then(data => setCars(data))
 
     }, []) */
    return (
        <div className="container mx-auto my-8">
            {/* <h2 className="text-2xl font-bold py-4">Cars Data</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {cars?.length > 0 ?
                    cars.map((car, i) =>
                        <a key={i} href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-300">
                            <img
                                alt="Home"
                                src={car.imageLink || 'https://img.freepik.com/free-photo/front-view-moving-black-car-highway_1268-21986.jpg?t=st=1696307359~exp=1696307959~hmac=6ec325200f7c0225b25559d26cd2d7b7fe20692679aaf8116563e58d224d4100'}
                                className="h-56 w-full rounded-md object-cover"
                            />

                            <div className="mt-2">
                                <dl>
                                    <div>
                                        <dt className="sr-only">Price</dt>

                                        <dd className="text-sm text-gray-500">${car?.rentPrice} / Monthly</dd>
                                    </div>

                                    <div>
                                        <dt className="sr-only">Car Name</dt>

                                        <dd className="font-medium text-xl">{car.carName}</dd>
                                    </div>
                                </dl>

                                <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="h-4 w-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Setting</p>

                                            <p className="font-medium">{car?.seatingCapacity} People</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="h-4 w-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Mileage</p>

                                            <p className="font-medium">{car?.mileagePerLiter}KM/Liter</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="h-4 w-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Fuel</p>

                                            <p className="font-medium">{car?.fuel}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ) : <h1 className="text-2xl font-semibold text-center">No Result found</h1>
                }
            </div>


        </div>
    );
};

export default CarCards;