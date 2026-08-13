const variants = {
	primary: "bg-primary text-accent hover:bg-primary/90",
	secondary: "bg-secondary text-foreground hover:bg-secondary/80",
	outline: "border border-primary bg-transparent hover:bg-muted",
	danger: "bg-destructive text-white hover:bg-destructive/70",
	ghost: "bg-transparent hover:bg-muted",
};

const CustomButton = ({
	children,
	onClick,
	type = "button",
	variant = "primary",
	icon: Icon,
	className = "",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 transition duration-150 ${variants[variant]} ${className}`}
		>
			{Icon && <Icon size={20} />}
			{children}
		</button>
	);
};

export default CustomButton;
