import { Moon, Plus, Sun } from "lucide-react";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";

const AppHeader = ({ onAddTask, isDarkMode, onToggleTheme }) => {
	const tasks = useSelector((state) => state.tasks.tasks);
	const completedTasks = tasks.filter((task) => task.completed).length;

	return (
		<div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 className="mb-2 text-3xl font-bold">Task Manager</h1>
				<span className="text-muted-foreground">
					{completedTasks} of {tasks.length} tasks completed
				</span>
			</div>
			<div className="flex items-center gap-3 sm:shrink-0">
				<CustomButton icon={Plus} onClick={onAddTask} className="flex-1 sm:flex-none">
					Add Task
				</CustomButton>
				<button
					type="button"
					onClick={onToggleTheme}
					aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
					className="hover:bg-accent cursor-pointer rounded-md p-2 transition-colors"
				>
					{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
				</button>
			</div>
		</div>
	);
};

export default AppHeader;
