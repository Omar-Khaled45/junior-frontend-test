import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
	},
});

store.subscribe(() => {
	localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
});

export default store;
