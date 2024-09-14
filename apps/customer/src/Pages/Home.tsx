import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import menuImage from '../assets/menu.png';
import Menu from './Menu';
import Cart from './Cart';
import Orders from './Orders';
import Profile from './Profile';

const MenuContent = () =><Menu />;
const CartContent = () => <Cart />;
const OrdersContent = () => <Orders />;
const ProfileContent = () =><Profile />;

function Home() {
    const [sidebar, setSidebar] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>('menu');

    const renderContent = () => {
        switch (selectedOption) {
            case 'menu':
                return <MenuContent />;
            case 'cart':
                return <CartContent />;
            case 'orders':
                return <OrdersContent />;
            case 'profile':
                return <ProfileContent />;
            default:
                return <div className='text-xl text-white'>Select an option</div>;
        }
    };

    return (
        <div className="relative min-h-screen bg-slate-900">
            <div className="flex">
                <div
                    className={`fixed top-0 left-0 h-screen w-64 bg-slate-800 transform transition-transform duration-500 ease-in-out ${
                        sidebar ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <Sidebar onClose={() => setSidebar(false)} setSelectedOption={setSelectedOption} />
                </div>

                <div className="absolute top-4 left-4">
                    {!sidebar && (
                        <div
                            onClick={() => setSidebar(true)}
                            className="cursor-pointer"
                        >
                            <img
                                src={menuImage}
                                alt="menu"
                                className="h-10 w-10 text-white"
                            />
                        </div>
                    )}
                </div>

                <div className="flex justify-center items-center w-full h-full">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Home;
