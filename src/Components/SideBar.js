import React, { useState, useEffect, useRef } from 'react';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleMenu}
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        {isOpen ? '' : '---'}
      </button>
      {isOpen && (
        <div
          ref={sidebarRef}
          style={{
            width: '200px',
            height: '100vh',
            backgroundColor: 'transparent',
            color: 'black',
            padding: '20px',
            boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'fixed',
            left: 0,
            top: 0,
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              fontSize: '18px',
              lineHeight: '2.5',
            }}
          >
            <li
              style={{
                padding: '10px 0',
                cursor: 'pointer',
                borderBottom: '1px solid #34495e',
              }}
            >
              Student Portal
            </li>
            <li
              style={{
                padding: '10px 0',
                cursor: 'pointer',
                borderBottom: '1px solid #34495e',
              }}
            >
              Parents Portal
            </li>
            <li
              style={{
                padding: '10px 0',
                cursor: 'pointer',
                borderBottom: '1px solid #34495e',
              }}
            >
              Teacher Portal
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBar;
