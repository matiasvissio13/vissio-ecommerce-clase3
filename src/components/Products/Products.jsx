import { MdAddShoppingCart } from 'react-icons/md';
import { BsPlus, BsDash } from 'react-icons/bs';
import { useState } from 'react';

export function Products({ products }) {

    const [, setQuantity] = useState(1)

    const addQty = (id) => {
        let quantity = products[id - 1].qty
        quantity >= 9 ? quantity = 9 : setQuantity(products[id - 1].qty++)
    }

    const removeQty = (id) => {
        let quantity = products[id - 1].qty
        quantity <= 1 ? quantity = 1 : setQuantity(products[id - 1].qty--)
    }

    return (
        <main>
            <section className='max-w-[1240px] mt-[70px] px-2 [1240px]:px-0'>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5'>
                    {products.map(product => {
                        return (
                            <li className='flex flex-col justify-between text-black rounded-xl shadow-md shadow-zinc-300 bg-zinc-50' key={product.id}>
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className='w-[350px] h-[180px] md:w-[350px] md:h-[240px] object-cover rounded-t-xl text-zinc-900'
                                />
                                <hr />
                                <div className='flex flex-row justify-between rounded-b-xl h-32'>
                                    <div className='flex flex-col px-3 gap-1'>
                                        <h2 className='text-[1.2rem] sm:text-[1.4rem] pt-2 font-semibold'>${product.price}</h2>
                                        <h3 className='text-[.8rem] sm:text-sm'>{product.title}</h3>
                                    </div>
                                    <div>
                                        <button onClick={() => console.log(`${product.title} se ah guardado en el carrito.`)}
                                            className='p-2 pt-6 me-3 rounded-b-md text-white bg-orange-600 transition-all duration-400 shadow-[#020826] hover:pt-7'>
                                            {
                                                <MdAddShoppingCart size={22} />
                                            }
                                        </button>
                                    </div>
                                </div>

                                <div className='flex justify-center'>
                                    <div className='flex items-center w-max mb-2 rounded-md bg-slate-200'>
                                        <button className='w-full h-full rounded-l-md px-1 hover:bg-slate-300' onClick={() => addQty(product.id)}><BsPlus /></button>
                                        <p className='px-1'>{product.qty}</p>
                                        <button className='w-full h-full rounded-r-md px-1 hover:bg-slate-300' onClick={() => removeQty(product.id)}><BsDash /></button>
                                    </div>
                                </div>
                                <h6 className='flex justify-center items-center text-[0.7rem] mb-2'>SKU-ASFD-YRE</h6>

                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}