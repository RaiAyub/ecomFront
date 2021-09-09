import React from 'react'
import banner from './images/banner.jpg'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <img className='home_banner' src={banner} />            

            <div className='home_row'>
            
            <div className='product_pic' >
                
                <Link to='/furniture'>
                    <img className='fur'
                        src='https://shop.cleosfurniture.com/wp-content/uploads/2021/01/furniture-1024x474.jpg' />                
                </Link>

            </div>

            
            <div className='product_pic'>
                <img className='fur'
                    src='https://images.indianexpress.com/2020/03/makeup-de-clutter-1200.jpg' />
                                

                </div>
                
                


            </div>
            
            <div className='home_row'>
            
            <div className='product_pic' >
                
                <Link to='/furniture'>
                    <img className='fur'
                        src='https://cdn-images.farfetch-contents.com/boutiques/10441/PG10441_0_S_1080.jpg' />                
                </Link>

            </div>

            
            <div className='product_pic'>
                <img className='fur'
                    src='https://gadgetgenie.com/wp-content/uploads/2019/03/device-7.png' />
                                

                </div>
                
                


            </div>

            </div>
    )
}

export default Home
