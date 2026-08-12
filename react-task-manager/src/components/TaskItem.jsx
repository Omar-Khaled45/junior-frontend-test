import { Clock, Pencil, Trash2 } from "lucide-react";

const TaskItem = () => {
	return (
		<div className="bg-card text-card-foreground false flex flex-col gap-6 rounded-md border p-4 shadow-sm">
			<div className="flex gap-3">
				<div class="flex-1 space-y-3">
					<div class="flex justify-between">
						<div className="flex items-center gap-1.5">
							<label className="group relative inline-block h-5 w-5 cursor-pointer">
								<input
									type="checkbox"
									className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
								/>
								<svg viewBox="0 0 35.6 35.6" className="h-5 w-5">
									<circle
										r="17.8"
										cy="17.8"
										cx="17.8"
										className="group-has-checked:fill-primary fill-gray-300 transition-all duration-500 ease-in-out"
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
							<span class="text-muted-foreground text-lg font-semibold">
								new task
							</span>
						</div>
						<div class="flex space-x-2">
							<button className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-sm font-medium transition-all">
								<Pencil size={18} />
							</button>
							<button className="hover:bg-accent text-destructive dark:hover:bg-accent/50 cursor-pointer items-center justify-center gap-1.5 rounded-md p-2 text-sm font-medium transition-all">
								<Trash2 size={18} />
							</button>
						</div>
					</div>
					<p class="text-muted-foreground line-through">asd</p>
					<div class="flex flex-col gap-4">
						<div class="flex items-center gap-2 capitalize">
							<span>Priority:</span>
							<span class="block h-3 w-3 rounded-full bg-yellow-500"></span>
							<span>medium</span>
						</div>
						<div className="space-x-2">
							<span>Status:</span>
							<span class="w-fit items-center rounded-full bg-green-50 px-2 py-1 text-sm font-medium text-green-700 capitalize inset-ring inset-ring-green-600/20">
								completed
							</span>
						</div>
						<div className="flex items-center gap-2">
							Due Date:
							<span class="flex items-center gap-1 text-sm text-red-600">
								<Clock size={16} /> 8/5/2026
								<span class="font-semibold">Overdue</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskItem;
