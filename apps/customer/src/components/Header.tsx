function Header() {
    return (
        <div>
            <div>
                <div className='bg-slate-900 h-20'>
                    <div className='flex justify-between items-center h-full px-12'>
                        <div>
                            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='logo' className='h-12' />
                        </div>
                        <div>
                            <button className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out'>Menu</button>
                        </div>
                        <div>
                            <button className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out'>Cart</button>
                        </div>
                        <div>
                            <button className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out'>Orders</button>
                        </div>
                        <div>
                            <button className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out'>Profile</button>
                        </div>
                        <div>
                            <button className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:text-red-500 transform hover:scale-110 transition duration-300 ease-in-out'>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header