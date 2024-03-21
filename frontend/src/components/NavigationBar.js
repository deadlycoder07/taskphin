import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="bg-gray-800 shadow z-40 p-4 w-screen">
            <div className="container flex justify-between items-center">
                <h1 className="px-10 text-3xl gradient-text">
                    TaskPhin
                </h1>
            </div>
        </nav>
    );
};

export default NavigationBar;
