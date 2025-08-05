import React from 'react';
import './Shop.css';
import shopData from './ShopData.json';

function Shop() {
    // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 7, 6, 5, 4, 3, 3, 2, 4];
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        shopData.map((cakeItem, cakeIndex) => {
                            return (
                                <div key={cakeIndex} className='col-lg-3 col-md-4 col-sm-6 col-12 main_shopCard'>
                                    <div className='shop_card'>
                                        <div className='shop_img'>
                                            <img src={cakeItem.imgLink} alt='shop image' />
                                        </div>
                                        <h3>{cakeItem.title}</h3>
                                        <p style={{ margin: 0, paddingBottom: '5px' }}>
                                            Price : <span className='no_rate'>689</span> <span style={{ color: 'green', fontWeight: 'bolder' }}> {cakeItem.price} Rs./</span>
                                        </p>
                                        <div className='shop_buy'>
                                            <button className='order bg-success'>Order</button>
                                            <button className='fav bg-danger'>Favrate</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Shop;