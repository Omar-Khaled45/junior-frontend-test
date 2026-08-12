import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const CustomSelect = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="relative flex-1">
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="flex w-full cursor-pointer items-center justify-between rounded-md border bg-white px-3.5 py-2 text-left"
			>
				<span>{selectedOption.label}</span>

				<ChevronDown
					size={18}
					className={`text-gray-400 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			{/* Options */}
			{isOpen && (
				<div className="absolute top-[calc(100%+4px)] left-0 z-50 w-full space-y-1 rounded-md border border-gray-200 bg-white p-1 shadow-lg">
					{options.map((option) => (
						<button
							key={option.value}
							type="button"
							onClick={() => handleSelect(option)}
							className={`flex w-full cursor-pointer items-center justify-between rounded-md px-2.5 py-2 text-left text-base hover:bg-gray-100 ${
								selectedOption.value === option.value ? "bg-gray-100" : ""
							}`}
						>
							<span>{option.label}</span>

							{selectedOption.value === option.value && (
								<Check size={18} className="text-gray-500" />
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
