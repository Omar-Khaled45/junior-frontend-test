import { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const MainContainer = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [editingTask, setEditingTask] = useState(null);
	const [isDarkMode, setIsDarkMode] = useState(
		() => localStorage.getItem("theme") === "dark",
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const closeForm = () => {
		setIsFormOpen(false);
		setEditingTask(null);
	};

	const openEditForm = (task) => {
		setEditingTask(task);
		setIsFormOpen(true);
	};

	const handleBackdropClick = (event) => {
		if (event.target === event.currentTarget) closeForm();
	};

	return (
		<div className="container mx-auto px-6 py-8 md:max-w-175">
			<AppHeader
				onAddTask={() => {
					setEditingTask(null);
					setIsFormOpen((open) => !open);
				}}
				isDarkMode={isDarkMode}
				onToggleTheme={() => setIsDarkMode((isDark) => !isDark)}
			/>
			{isFormOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
					onClick={handleBackdropClick}
					role="presentation"
				>
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
