import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
	return (
		<div className="shadow-md hover:shadow-lg rounded-full transition cursor-pointer py-4  w-full sm:w-auto">
			<div className="flex flex-row items-center justify-between">
				<div className="text-sm font-semibold px-6  sm:border-x-2 w-auto ">Anywhere</div>
				<div className="text-sm font-semibold px-6 border-x-2 hidden sm:block flex-1">Anyweek</div>
				<div className="text-sm font-semibold px-6 flex flex-row items-center gap-2">
					<div className="hidden sm:block text-gray-600">Add guests</div>
					<div className="bg-rose-500 text-white h-6 w-6 rounded-full flex items-center justify-center">
						<BiSearch />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
