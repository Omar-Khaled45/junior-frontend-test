import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../redux/tasksSlice";
import TaskItem from "./TaskItem";

const TaskList = ({ onEdit }) => {
	const tasks = useSelector((state) => state.tasks.tasks);
	const filteredTasks = useSelector(selectFilteredTasks);

	if (tasks.length === 0) {
		return <p className="rounded-md border border-dashed p-8 text-center text-muted-foreground">Nothing here yet! Let’s add your first task and make progress happen.</p>;
	}

	if (filteredTasks.length === 0) {
		return <p className="rounded-md border border-dashed p-8 text-center text-muted-foreground">No tasks match your current filters.</p>;
	}

	return <div className="space-y-4">{filteredTasks.map((task) => <TaskItem key={task.id} task={task} onEdit={onEdit} />)}</div>;
};

export default TaskList;
