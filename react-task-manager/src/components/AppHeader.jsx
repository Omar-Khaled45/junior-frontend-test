import { Plus } from "lucide-react";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";

const AppHeader = ({ onAddTask }) => {
	const tasks = useSelector((state) => state.tasks.tasks);
	const completedTasks = tasks.filter((task) => task.completed).length;
	
	return (
		<div className="mb-5 flex items-center justify-between">
			<div>
				<h1 className="mb-2 text-3xl font-bold">Task Manager</h1>
				<span className="text-muted-foreground">{completedTasks} of {tasks.length} tasks completed</span>
			</div>
			<div>
				<CustomButton icon={Plus} onClick={onAddTask}>Add Task</CustomButton>
			</div>
		</div>
	);
};

export default AppHeader;
