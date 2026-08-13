import { Clock, Pencil, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/tasksSlice";
import {
	PRIORITY_FLAG_STYLES,
	STATUS_BADGE_STYLES,
} from "../constants/taskStyles";

const TaskItem = ({ task, onEdit }) => {
	const dispatch = useDispatch();

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const dueDate = task.dueDate ? new Date(`${task.dueDate}T00:00:00`) : null;

	const isOverdue = dueDate && dueDate < today && !task.completed;

	const formattedDate = dueDate?.toLocaleDateString(undefined, {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return (
		<div className="bg-card text-card-foreground flex flex-col gap-6 rounded-md border p-4 shadow-sm">
			<div className="flex gap-3">
				<div className="flex-1 space-y-3">
					<div className="flex justify-between gap-3">
						<div className="flex items-center gap-1.5">
							<label className="group relative inline-block h-5 w-5 cursor-pointer">
								<input
									type="checkbox"
									checked={task.completed}
									onChange={() => dispatch(toggleTaskCompletion(task.id))}
									className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
								/>
								<svg viewBox="0 0 35.6 35.6" className="h-5 w-5">
								<circle
									r="17.8"
									cy="17.8"
									cx="17.8"
									className="fill-gray-300 transition-all duration-500 ease-in-out group-has-checked:fill-primary"
								/>

									<circle
										r="14.37"
										cy="17.8"
										cx="17.8"
										className="fill-none stroke-white stroke-2 transition-all duration-500 ease-in-out [stroke-dasharray:100] [stroke-dashoffset:100] [stroke-miterlimit:10] group-has-checked:[stroke-dashoffset:0]"
									/>

									<polyline
										points="11.78 18.12 15.55 22.23 25.17 12.87"
										className="fill-none stroke-white stroke-2 transition-all duration-500 ease-in-out [stroke-dasharray:22] [stroke-dashoffset:22] [stroke-linecap:round] [stroke-linejoin:round] group-has-checked:[stroke-dashoffset:0]"
									/>
								</svg>
							</label>
							<span
								className={`text-lg font-semibold ${task.completed ? "text-muted-foreground line-through" : ""}`}
							>
								{task.title}
							</span>
						</div>
						<div className="flex space-x-2">
							<button
								type="button"
								aria-label={`Edit ${task.title}`}
								onClick={() => onEdit(task)}
								className="hover:bg-accent cursor-pointer rounded-md p-2 text-sm font-medium transition-all"
							>
								<Pencil size={18} />
							</button>
							<button
								type="button"
								aria-label={`Delete ${task.title}`}
								onClick={() => dispatch(deleteTask(task.id))}
								className="text-destructive hover:bg-accent cursor-pointer rounded-md p-2 text-sm font-medium transition-all"
							>
								<Trash2 size={18} />
							</button>
						</div>
					</div>
					{task.description && (
						<p
							className={`text-muted-foreground ${task.completed ? "line-through" : ""}`}
						>
							{task.description}
						</p>
					)}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 capitalize">
							<span>Priority:</span>
							<span
								className={`block h-3 w-3 rounded-full ${PRIORITY_FLAG_STYLES[task.priority] || PRIORITY_FLAG_STYLES.medium}`}
							/>
							<span>{task.priority}</span>
						</div>
						<div className="space-x-2">
							<span>Status:</span>
							<span
								className={`w-fit rounded-full px-2 py-1 text-sm font-medium capitalize inset-ring ${STATUS_BADGE_STYLES[task.status] || STATUS_BADGE_STYLES.pending}`}
							>
								{task.status}
							</span>
						</div>
						{formattedDate && (
							<div className="flex items-center gap-2">
								Due Date:
								<span
									className={`flex items-center gap-1 text-sm ${isOverdue ? "text-red-600" : "text-muted-foreground"}`}
								>
									<Clock size={16} />
									{formattedDate}
									{isOverdue && <span className="font-semibold">Overdue</span>}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskItem;
