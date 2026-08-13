import { useState } from "react";
import AppHeader from "./AppHeader";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const MainContainer = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [editingTask, setEditingTask] = useState(null);

	const closeForm = () => {
		setIsFormOpen(false);
		setEditingTask(null);
	};

	const openEditForm = (task) => {
		setEditingTask(task);
		setIsFormOpen(true);
	};

	return (
		<div className="container mx-auto px-6 py-8 md:max-w-175">
			<AppHeader
				onAddTask={() => {
					setEditingTask(null);
					setIsFormOpen((open) => !open);
				}}
			/>
			{isFormOpen && (
				<div className="mb-7">
					<TaskForm
						key={editingTask?.id || "new"}
						task={editingTask}
						onClose={closeForm}
					/>
				</div>
			)}
			<SearchInput />
			<Filter />
			<TaskList onEdit={openEditForm} />
		</div>
	);
};

export default MainContainer;
