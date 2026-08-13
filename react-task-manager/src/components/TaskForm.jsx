import { X } from "lucide-react";
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
			className="bg-card text-card-foreground relative max-h-full w-full max-w-4xl rounded-2xl border p-8 shadow-xl"
		>
			<button
				type="button"
				onClick={onClose}
				className="text-muted-foreground hover:bg-accent hover:text-foreground absolute top-3 right-4 cursor-pointer rounded-md p-2 transition-colors"
			>
				<X size={20} />
			</button>
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
					className="bg-background text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20 h-10 w-full rounded-lg border px-4 text-base transition outline-none focus:ring-2"
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
					className="bg-background focus:border-ring focus:ring-ring/20 w-full rounded-md border p-2 transition-all duration-200 focus:ring-4 focus:outline-none"
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
							className="bg-background focus:border-ring focus:ring-ring/20 w-full rounded-md border p-2 scheme-dark transition-all duration-200 focus:ring-4 focus:outline-none"
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
