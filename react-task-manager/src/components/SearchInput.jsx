import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/tasksSlice";

const SearchInput = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector((state) => state.tasks.filters.searchQuery);

	return (
		<div className="relative">
			<Search
				size={20}
				className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
			/>
			<input
				type="text"
				placeholder="Search Task..."
				value={searchQuery}
				onChange={(event) =>
					dispatch(setFilters({ searchQuery: event.target.value }))
				}
				className="w-full rounded-md border bg-white p-2 pl-10 transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none"
			/>
		</div>
	);
};

export default SearchInput;
