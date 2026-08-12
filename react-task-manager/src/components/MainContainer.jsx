import AppHeader from "./AppHeader";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import TaskList from "./TaskList";

const MainContainer = () => {
	return (
		<div className="container mx-auto px-6 py-8 md:max-w-175">
			<AppHeader />
			<SearchInput />
			<Filter />
			<TaskList />
		</div>
	);
};

export default MainContainer;
