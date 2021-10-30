import Image from 'next/image';
import Logo from './Logo';
import Toggle from './Toggle';
import { useTheme } from 'next-themes';

const Header = () => {
	const { setTheme, theme } = useTheme();

	return (
		<header className="flex justify-between items-center mb-10">
			<Logo />
			{theme === undefined ? null : (
				<Toggle/>
			)}
		</header>
	);
};

export default Header;
