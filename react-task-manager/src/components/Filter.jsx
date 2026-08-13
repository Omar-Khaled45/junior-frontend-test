import { Funnel } from "lucide-react";
import CustomSelect from "./CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/tasksSlice";

const Filter = () => {
	const statusFilters = [
		{ label: "All Status", value: "all" },
		{ label: "Pending", value: "pending" },
		{ label: "In Progress", value: "in-progress" },
		{ label: "Completed", value: "completed" },
	];

	const priorityFilters = [
		{ label: "All Priorities", value: "all" },
		{ label: "Low", value: "low" },
		{ label: "Medium", value: "medium" },
		{ label: "High", value: "high" },
	];

	const dateFilters = [
		{ label: "All Dates", value: "all" },
		{ label: "Today", value: "today" },
		{ label: "This Week", value: "this-week" },
		{ label: "Overdue", value: "overdue" },
	];

	const dispatch = useDispatch();
	const filters = useSelector((state) => state.tasks.filters);

	return (
		<div className="my-7 flex flex-col gap-3 sm:flex-row sm:items-center">
			<div className="flex shrink-0 items-center space-x-2">
				<Funnel size={16} />
				<span className="font-bold">Filters:</span>
			</div>
			<div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
				<CustomSelect
					options={statusFilters}
					value={filters.status}
					onChange={(status) => dispatch(setFilters({ status }))}
				/>
				<CustomSelect
					options={priorityFilters}
					value={filters.priority}
					onChange={(priority) => dispatch(setFilters({ priority }))}
				/>
				<CustomSelect
					options={dateFilters}
					value={filters.dueDate}
					onChange={(dueDate) => dispatch(setFilters({ dueDate }))}
				/>
			</div>
		</div>
	);
};

export default Filter;
