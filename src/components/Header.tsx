
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed top-0 right-0 z-50 p-4">
      <button
        onClick={toggleTheme}
        className="text-foreground hover:text-primary transition-colors duration-200 p-3 rounded-lg hover:bg-muted shadow-lg bg-background/95 backdrop-blur-sm border border-border"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </header>
  );
};

export default Header;
