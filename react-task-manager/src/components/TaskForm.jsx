import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";

const TaskForm = () => {
	const priorityOptions = [
		{ label: "Low", value: "low" },
		{ label: "Medium", value: "medium" },
		{ label: "High", value: "high" },
	];

	const statusOptions = [
		{ label: "Pending", value: "pending" },
		{ label: "In Progress", value: "in-progress" },
		{ label: "Completed", value: "completed" },
	];

	return (
		<form className="w-full max-w-4xl rounded-2xl border border-gray-300 bg-white p-8 shadow-lg">
			<h2 className="text-accent-foreground mb-7 text-2xl font-medium">
				Add New Task
			</h2>

			<div className="mb-7">
				<label
					htmlFor="title"
					className="text-accent-foreground mb-3 block text-base font-semibold"
				>
					Title
				</label>

				<input
					id="title"
					type="text"
					placeholder="Enter task title"
					className="h-10 w-full rounded-lg border border-gray-200 px-4 text-base text-gray-800 transition outline-none placeholder:text-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
				/>
			</div>

			<div className="mb-7">
				<label
					htmlFor="description"
					className="text-accent-foreground mb-3 block text-base font-semibold"
				>
					Description
				</label>

				<textarea
					id="description"
					placeholder="Type your message here."
					rows={3}
					className="w-full rounded-md border bg-white p-2 transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none"
				/>
			</div>

			<div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
				<div>
					<label className="text-accent-foreground mb-3 block text-base font-semibold">
						Priority
					</label>

					<CustomSelect options={priorityOptions} />
				</div>

				<div>
					<label className="text-accent-foreground mb-3 block text-base font-semibold">
						Status
					</label>

					<CustomSelect options={statusOptions} />
				</div>

				<div>
					<label
						htmlFor="due-date"
						className="text-accent-foreground mb-3 block text-base font-semibold"
					>
						Due Date
					</label>

					<div className="relative">
						<input
							id="due-date"
							type="date"
							className="w-full rounded-md border bg-white p-2 transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none"
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				<CustomButton>Add Task</CustomButton>
				<CustomButton variant="secondary">Cancel</CustomButton>
			</div>
		</form>
	);
};

export default TaskForm;
