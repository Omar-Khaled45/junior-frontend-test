import { createSlice } from "@reduxjs/toolkit";

const getTasks = () => {
	try {
		const savedTasks = localStorage.getItem("tasks");
		return savedTasks ? JSON.parse(savedTasks) : [];
	} catch {
		return [];
	}
};

const initialState = {
	tasks: getTasks(),
	filters: {
		priority: "all",
		status: "all",
		dueDate: "all",
		searchQuery: "",
	},
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push({
				id: Date.now(),
				title: action.payload.title,
				description: action.payload.description || "",
				priority: action.payload.priority,
				status: action.payload.status || "pending",
				dueDate: action.payload.dueDate || "",
				completed: false,
			});
		},
		editTask: (state, action) => {
			const task = state.tasks.find((task) => task.id === action.payload.id);

			if (task) {
				task.title = action.payload.title;
				task.description = action.payload.description || "";
				task.priority = action.payload.priority;
				task.status = action.payload.status;
				task.dueDate = action.payload.dueDate;
				task.completed = action.payload.status === "completed";
			}
		},
		deleteTask: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		toggleTaskCompletion: (state, action) => {
			const task = state.tasks.find((task) => task.id === action.payload);

			if (task) {
				task.completed = !task.completed;
				task.status = task.completed ? "completed" : "in-progress";
			}
		},
		setFilters: (state, action) => {
			state.filters = { ...state.filters, ...action.payload };
		},
	},
});

export const {
	addTask,
	editTask,
	deleteTask,
	toggleTaskCompletion,
	setFilters,
} = tasksSlice.actions;

export const selectFilteredTasks = (state) => {
	const { tasks, filters } = state.tasks;
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const endOfWeek = new Date(today);
	endOfWeek.setDate(today.getDate() + (7 - today.getDay()));

	return tasks.filter((task) => {
		const dueDate = task.dueDate ? new Date(`${task.dueDate}T00:00:00`) : null;

		const searchQuery = filters.searchQuery.trim().toLowerCase();

		const matchesPriority =
			filters.priority === "all" || task.priority === filters.priority;

		const matchesStatus =
			filters.status === "all" || task.status === filters.status;

		const matchesDueDate =
			filters.dueDate === "all" ||
			(filters.dueDate === "today" && dueDate?.getTime() === today.getTime()) ||
			(filters.dueDate === "this-week" &&
				dueDate &&
				dueDate >= today &&
				dueDate <= endOfWeek) ||
			(filters.dueDate === "overdue" && dueDate && dueDate < today);

		const matchesSearch =
			searchQuery === "" ||
			task.title.toLowerCase().includes(searchQuery) ||
			task.description.toLowerCase().includes(searchQuery);

		return matchesPriority && matchesStatus && matchesDueDate && matchesSearch;
	});
};

export default tasksSlice.reducer;
