import { menuItems } from '../utils/menuItem';
import FoodImage from '../assets/food.jpeg';
import Card from '../components/Card';
function Menu() {
    return (
        <div className="bg-slate-900 min-h-screen px-12 py-6 mx-3">
            <div className="flex flex-col gap-8">
                {menuItems.categories.map((category) => (
                    <div>
                        <p>
                            <span className="text-2xl text-white">{category.category}</span>
                        </p>
                        <div className='flex flex-col gap-8 bg-slate-800 rounded-lg p-4'>
                            <div className='flex flex-wrap gap-4'>
                                {category.items.map((item) => (
                                    <Card title={item.name} price={item.price} img={FoodImage} onClick={() => console.log('Add to cart clicked')} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
