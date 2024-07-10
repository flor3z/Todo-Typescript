import { MdSunny } from 'react-icons/md';
import { BsMoonFill } from 'react-icons/bs';
import { useThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
  const { darkMode, setDarkMode } = useThemeContext();

  return (
    <span
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-10 right-2 sm:right-10 rounded-full shadow-lg cursor-pointer bg-gray-500 hover:bg-gray-700   w-11 h-11 transition-all transform ease-out duration-500"
    >
      {!darkMode ? (
        <BsMoonFill className="w-11 h-11 p-1 text-amber-200 " />
      ) : (
        <MdSunny className="w-11 h-11 p-1 text-yellow-500 transition-all transform ease-out duration-500" />
      )}
    </span>
  );
};

export default ThemeButton;
