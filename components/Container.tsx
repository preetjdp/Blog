const Container = ({ children }) => {
	return (
		<div className="bg-gray-50 dark:bg-gray-custom-1 text-gray-900 dark:text-gray-200 min-h-screen font-serif ">
			<div className="max-w-2xl mx-auto py-10 px-6">{children}</div>
		</div>
	);
};

export default Container;
