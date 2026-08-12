import { Plus } from "lucide-react";
import CustomButton from "./CustomButton";

const AppHeader = () => {
	return (
		<div className="mb-5 flex items-center justify-between">
			<div>
				<h1 className="mb-2 text-3xl font-bold">Task Manager</h1>
				<span className="text-muted-foreground">0 of 0 tasks completed</span>
			</div>
			<div>
				<CustomButton icon={Plus}>Add Task</CustomButton>
			</div>
		</div>
	);
};

export default AppHeader;
