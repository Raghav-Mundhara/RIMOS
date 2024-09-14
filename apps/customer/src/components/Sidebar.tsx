import React from 'react';
import BackImage from '../assets/back.png';
import RLogo from '../assets/letter-r.png';
interface SidebarProps {
    onClose: () => void;
    setSelectedOption: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, setSelectedOption }) => {
    return (
        <div className="h-screen">
            <div className="bg-slate-800 h-full w-64">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-center items-center h-20">
                            <img
                                src={RLogo}
                                alt="logo"
                                className="h-12"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => setSelectedOption('menu')}
                                className="bg-slate-700 text-white px-4 py-2 my-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
                            >
                                Menu
                            </button>
                            <button
                                onClick={() => setSelectedOption('cart')}
                                className="bg-slate-700 text-white px-4 py-2 my-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
                            >
                                Cart
                            </button>
                            <button
                                onClick={() => setSelectedOption('orders')}
                                className="bg-slate-700 text-white px-4 py-2 my-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
                            >
                                Orders
                            </button>
                            <button
                                onClick={() => setSelectedOption('profile')}
                                className="bg-slate-700 text-white px-4 py-2 my-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
                            >
                                Profile
                            </button>
                            <div>
                                <img
                                    src={BackImage}
                                    alt="Close"
                                    className="h-10 w-10 cursor-pointer"
                                    onClick={onClose}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-4">
                        <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:text-red-500 transform hover:scale-110 transition duration-300 ease-in-out">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
