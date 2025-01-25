import React from 'react';

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  };

  React.useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      🌙
    </button>
  );
};

export default DarkModeToggle;
