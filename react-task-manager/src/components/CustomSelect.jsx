import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const CustomSelect = ({ options, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef(null);
	const selectedOption =
		options.find((option) => option.value === value) || options[0];

	const handleSelect = (option) => {
		onChange?.(option.value);
		setIsOpen(false);
	};

	// Handle click outside the dropdown menu
	useEffect(() => {
		const handlePointerDown = (event) => {
			if (!selectRef.current?.contains(event.target)) setIsOpen(false);
		};

		document.addEventListener("pointerdown", handlePointerDown);
		return () => document.removeEventListener("pointerdown", handlePointerDown);
	}, []);

	return (
		<div ref={selectRef} className="relative flex-1">
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="bg-card flex w-full cursor-pointer items-center justify-between rounded-md border px-3.5 py-2 text-left"
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
				<div className="bg-popover text-popover-foreground absolute top-[calc(100%+4px)] left-0 z-50 w-full space-y-1 rounded-md border p-1 shadow-lg">
					{options.map((option) => (
						<button
							key={option.value}
							type="button"
							onClick={() => handleSelect(option)}
							className={`hover:bg-accent flex w-full cursor-pointer items-center justify-between rounded-md px-2.5 py-2 text-left text-base ${
								selectedOption.value === option.value ? "bg-accent" : ""
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
