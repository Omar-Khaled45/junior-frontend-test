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
		<div className="my-7 flex gap-3">
			<div className="flex items-center space-x-2">
				<Funnel size={16} />
				<span class="font-bold">Filters:</span>
			</div>
			<div className="flex flex-1 flex-wrap gap-1">
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
