import React from 'react'
import './Furniture.css'
import Product from './Product'

function Furniture() {

    return (
            <div className='furniture'>
            <img className='fur_banner'
                src='https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/HDH21-LD-Furniture-MW.jpg' />
    
    
                <div className='fur_row'>
    
    
                    {/* Product 1 */}
                <Product
                    id='1234'
                    title='Java for Starters'
                    price={10.99}
                    rating={5}
                    image='https://images-us.bookshop.org/ingram/9781790789870.jpg?height=500&v=v2'        
                
                    />                
    
                    
                    {/* Product 2 */}
                <Product
                    id='12345'
                    title='Java for Starters'
                    price={10.99}
                    rating={5}
                    image='https://images-us.bookshop.org/ingram/9781790789870.jpg?height=500&v=v2'        
                
                    />
                    
                </div>
                
                <div className='fur_row'>
                <Product
                    id='123456'
                    title='Java for Starters'
                    price={10.99}
                    rating={5}
                    image='https://images-us.bookshop.org/ingram/9781790789870.jpg?height=500&v=v2'        
                
                    />
                <Product
                    id='1234567'
                    title='Java for Starters'
                    price={10.99}
                    rating={5}
                    image='https://images-us.bookshop.org/ingram/9781790789870.jpg?height=500&v=v2'        
                
                    />
    
                <Product
                    id='12345678'
                    title='Java for Starters'
                    price={10.99}
                    rating={5}
                    image='https://images-us.bookshop.org/ingram/9781790789870.jpg?height=500&v=v2'        
                
                    />
                                
                </div>
    
                <div className='fur_row'>
                <Product
                    id='098'
                    title='Java for Starters'
                    price={10.99}
                    rating={5}
                    image='https://images-us.bookshop.org/ingram/9781790789870.jpg?height=500&v=v2'        
                
                    />
                    
                </div>
    
            </div>
        )
    }
    
export default Furniture
