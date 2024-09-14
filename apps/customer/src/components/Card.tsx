import Button from './Button'

function Card(props: { title: string, price: number, img: string, onClick: () => void }) {
    return (
        <div>
            <div className='bg-slate-700 rounded-lg flex flex-col items-center p-4'>
                <img src={props.img} alt={props.title} className="h-32 w-32" />
                <p className="text-white">{props.title}</p>
                <p className="text-white">{props.price}</p>
                <Button title="Add to Cart" onClick={props.onClick} />
            </div>
        </div>
    )
}

export default Card