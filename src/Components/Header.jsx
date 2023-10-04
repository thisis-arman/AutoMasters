import { useEffect, useState } from "react";
import CarCards from "./CarCards";


const Header = () => {


    const [cars, setCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        fetch('https://www.jsonkeeper.com/b/IDGI')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    console.log(cars)

    /*   useEffect(() => {
          fetch('https://www.jsonkeeper.com/b/IDGI')
              .then(res => res.json())
              .then(data => console.log(data))
      }, []) */

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when performing a new search
    };

    const filteredCars = cars.filter(car => {
        return car.carName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Calculate the starting and ending indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the cars to display for the current page
    const carsToDisplay = filteredCars.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <header className="bg-slate-100 mt-4 container mx-auto rounded-md">
                <div className="mx-auto max-w-screen-xl px-4 py-2  sm:px-6 lg:px-8">
                    <div className="flex items-center sm:justify-between sm:gap-4">
                        <div className="relative hidden sm:block">
                            <label className="sr-only" htmlFor="search"> Search </label>

                            <input
                                className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                                id="search"
                                type="search"
                                onChange={handleSearchChange}
                                placeholder="Search by car name"
                                value={searchQuery}
                                onKeyDown={(e) =>
                                    (e.key === "Enter")
                                }
                            />

                            <button
                                type="button"
                                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                            >
                                <span className="sr-only">Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div
                            className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
                        >
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                                >
                                    <span className="sr-only">Search</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>

                                <a
                                    href="#"
                                    className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                                >
                                    <span className="sr-only">Academy</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                                >
                                    <span className="sr-only">Notifications</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </a>
                            </div>


                        </div>
                    </div>


                </div>
            </header>

            <CarCards cars={carsToDisplay} />
            <div className="container mx-auto mt-4">
                <ul className="flex justify-center space-x-2">
                    {/* Previous Page */}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                } px-2 py-1 border rounded-md`}
                        >
                            Previous
                        </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i}>
                            <button
                                onClick={() => handlePageChange(i + 1)}
                                className={`${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-blue-200'
                                    } px-2 py-1 border rounded-md`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}

                    {/* Next Page */}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                } px-2 py-1 border rounded-md`}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default Header;