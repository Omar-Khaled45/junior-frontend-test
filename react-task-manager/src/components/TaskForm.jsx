import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/tasksSlice";

const TaskForm = ({ task, onClose }) => {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState(() =>
		task
			? {
					title: task.title || "",
					description: task.description || "",
					priority: task.priority || "medium",
					status: task.status || "pending",
					dueDate: task.dueDate || "",
				}
			: {
					title: "",
					description: "",
					priority: "medium",
					status: "pending",
					dueDate: "",
				},
	);

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			task
				? editTask({
						id: task.id,
						...formData,
						title: formData.title.trim(),
						completed: formData.status === "completed",
					})
				: addTask({ ...formData, title: formData.title.trim() }),
		);

		onClose();
	};
	const priorityOptions = [
		{ label: "Low", value: "low" },
		{ label: "Medium", value: "medium" },
		{ label: "Hard", value: "hard" },
	];

	const statusOptions = [
		{ label: "Pending", value: "pending" },
		{ label: "In Progress", value: "in-progress" },
		{ label: "Completed", value: "completed" },
	];

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-4xl rounded-2xl border border-gray-300 bg-white p-8 shadow-lg"
		>
			<h2 className="text-accent-foreground mb-7 text-2xl font-medium">
				{task ? "Edit Task" : "Add New Task"}
			</h2>

			<div className="mb-7">
				<label
					htmlFor="title"
					className="text-accent-foreground mb-3 block text-base font-semibold"
				>
					Title <span className="text-destructive">*</span>
				</label>

				<input
					id="title"
					type="text"
					placeholder="Enter task title"
					value={formData.title}
					onChange={(event) =>
						setFormData({ ...formData, title: event.target.value })
					}
					className="h-10 w-full rounded-lg border border-gray-200 px-4 text-base text-gray-800 transition outline-none placeholder:text-gray-500 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
					required
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
					value={formData.description}
					onChange={(event) =>
						setFormData({ ...formData, description: event.target.value })
					}
					className="w-full rounded-md border bg-white p-2 transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none"
				/>
			</div>

			<div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
				<div>
					<label className="text-accent-foreground mb-3 block text-base font-semibold">
						Priority <span className="text-destructive">*</span>
					</label>

					<CustomSelect
						options={priorityOptions}
						value={formData.priority}
						onChange={(priority) => setFormData({ ...formData, priority })}
					/>
				</div>

				<div>
					<label className="text-accent-foreground mb-3 block text-base font-semibold">
						Status <span className="text-destructive">*</span>
					</label>

					<CustomSelect
						options={statusOptions}
						value={formData.status}
						onChange={(status) => setFormData({ ...formData, status })}
					/>
				</div>

				<div>
					<label
						htmlFor="due-date"
						className="text-accent-foreground mb-3 block text-base font-semibold"
					>
						Due Date <span className="text-destructive">*</span>
					</label>

					<div className="relative">
						<input
							id="due-date"
							type="date"
							value={formData.dueDate}
							onChange={(event) =>
								setFormData({ ...formData, dueDate: event.target.value })
							}
							className="w-full rounded-md border bg-white p-2 transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none"
							required
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				<CustomButton type="submit">
					{task ? "Save Changes" : "Add Task"}
				</CustomButton>
				<CustomButton variant="secondary" onClick={onClose}>
					Cancel
				</CustomButton>
			</div>
		</form>
	);
};

export default TaskForm;
