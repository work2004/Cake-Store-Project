import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { motion, useInView } from "framer-motion";
const Home = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const tradingCake = [
        { tradImage: 'https://static.vecteezy.com/system/resources/previews/040/717/313/non_2x/ai-generated-red-velvet-cake-happy-birthday-cake-with-birthday-candles-against-a-dark-background-ai-generated-photo.JPG' },
        { tradImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCBg5BTJKV1BH6Qve2ur4L_RAmRDvelOTUiO4aO-gKLIA0fShcvPVuNkZ8I5M6NfYcRM&usqp=CAU' },
        { tradImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MI6PUSYVfBbc7CAoRU9O0w0xU9qWwswzFQ&s' },
        { tradImage: 'https://www.winni.in/celebrate-relations/wp-content/uploads/2019/05/featured-image-1.jpg' },
        { tradImage: 'https://s3.voyapon.com/wp-content/uploads/2020/10/10202213/cake_shop_Japan-scaled.jpg' },
        { tradImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfO8s4cJcxr9LxXkGxRrpluuxXXgt9XbBx3iTCXyy1aSH0SZl2dApZlUmryaqfaf-9k8&usqp=CAU' }
    ]

    const popularCake = [
        { cake_link: 'https://superbcake.com/wp-content/uploads/2021/10/superb-pink-cake.jpg', cake_name: 'Pink Vanilla Cake' },
        { cake_link: 'https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/83221_yummylicious-chocolate-cake.jpeg', cake_name: 'Chocolate Cake' },
        { cake_link: 'https://mynamepixs.com/assets/admin/uploads/products/6e0e2fe24ed323d2343cc3f3ac73a00e.jpg', cake_name: 'Red Birthday Cake' },
        { cake_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ChgG1kuBfOCBr5UPi677J5p6jWpqQrK0FJZjra_mz8pEc9ynh2ndPWZPwV2eHenNkIc&usqp=CAU', cake_name: 'Cocolate Cake' },
        { cake_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBDXExkojhhHfC3mkN8GTdbonxht3-gzWMA&s', cake_name: 'Cake for sister' },
        { cake_link: 'https://mynamepixs.com/assets/admin/uploads/products/6c3236cc90404d311b27f26575ca655f.jpg', cake_name: 'Purple Flower Cake' },
        { cake_link: 'https://i.pinimg.com/564x/c1/45/68/c145683f7f574c39a9d2d431083c59f5.jpg', cake_name: 'Birthday Cake' },
        { cake_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45tNc2ArRlaLRF841VWF2De2WRJEftf_BfY_IfHJ4Hh35aCRscSqYNrb-F68eVPCdmtg&usqp=CAU', cake_name: 'Doctors Cake' },
        { cake_link: 'https://cdn.shopify.com/s/files/1/0580/2668/8535/articles/274928783_277936964490110_2595069344284604703_n_0f204ce1-9216-4280-b117-a592fc7e4b8d.jpg?v=1658592415', cake_name: 'Rose Floser Cake' },

    ]

    return (
        <>
            <div className='container-fluid'>
                <div className=".main_poster">
                    <div className='col'>
                        <div className="confetti-container">
                            {
                                Array.from({ length: 30 }).map((_, i) => (
                                    <div key={i} className="flowers_style" style={{ "--i": i }} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="poster_content row">
                        <div className='col-md-5'>
                            <motion.div
                                className="poster_contect_div"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="main_title">Celebrate with <br />Sweetness</h1>
                                <p className="sub-heading">Custom cakes made with love and joy</p>
                                <button className="cta-button">Explore Cakes</button>
                            </motion.div>
                        </div>

                        <div className='col-md-7'>
                            <motion.div
                                className="right-section"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {/* <img
                                    src="homePoster.jpg"
                                    alt="Cake"
                                    className="poster_img"
                                /> */}
                                <div className='poster_main_image'>
                                    <div className='col'>
                                        <p className='customer_title'>
                                            <span className='qutos'>"</span>Custom cakes, lovingly handmade and delivered with a smile.<span className='qutos'>"</span><br />
                                            <span className='qutos'>"</span>From birthdays to big days - we don't just create cakes, we create memories.<span className='qutos'>"</span>
                                        </p>
                                    </div>
                                    <div className='my-3'>
                                        <h3 style={{ color: '#c2185b' }} className='text-center'>🎉 Trending Now!</h3>
                                    </div>
                                    <Carousel
                                        autoPlay
                                        infiniteLoop
                                        showThumbs={false}
                                        showStatus={false}
                                        interval={3000}
                                        transitionTime={500}
                                    >
                                        {
                                            tradingCake.map((tradItem, tradIndex) => {
                                                return (
                                                    <div key={tradIndex}>
                                                        <img className="poster_img" src={tradItem.tradImage} alt="Chocolate Cake" />
                                                    </div>
                                                )
                                            })
                                        }
                                        <div>
                                            <img className="poster_img" src="https://static.vecteezy.com/system/resources/previews/040/717/313/non_2x/ai-generated-red-velvet-cake-happy-birthday-cake-with-birthday-candles-against-a-dark-background-ai-generated-photo.JPG" alt="Chocolate Cake" />
                                        </div>
                                        <div>
                                            <img className="poster_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCBg5BTJKV1BH6Qve2ur4L_RAmRDvelOTUiO4aO-gKLIA0fShcvPVuNkZ8I5M6NfYcRM&usqp=CAU" alt="Strawberry Cake" />
                                        </div>
                                        <div>
                                            <img className="poster_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MI6PUSYVfBbc7CAoRU9O0w0xU9qWwswzFQ&s" alt="Vanilla Cake" />
                                        </div>
                                    </Carousel>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    {/* Popular Cakes */}
                    <div className="popular_cake_div">
                        <h2>Popular Cakes</h2>
                        <div className="popular_cake_box">
                            {
                                popularCake.map((cakeItem, cakeIndex) => {
                                    return (
                                        <div key={cakeIndex} className="cake_box">
                                            <img src={cakeItem.cake_link} alt="Choco" />
                                            <p>{cakeItem.cake_name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Edit this seciont part */}
                {/* <div className="home_poster">
                    <div className='row'>
                        <div className='col-6'>
                            <div className='pos_content'>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                    className="p-10 bg-pink-200 rounded-xl shadow-xl text-center text-xl font-semibold"
                                >
                                    <h2>Sirf Cake Nahi, Ek Meetha Ehsas</h2>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    <div className='pos_cake'>
                                        <div className='inner_pos_cake'>
                                            <img src='cakePos1.jpg' alt='cake' />
                                            <p>chocolate cake with ice-cream</p>
                                        </div>
                                        <div className='inner_pos_cake'>
                                            <img src='cakePos2.jpg' alt='cake' />
                                            <p>Strawberry cake with cream</p>
                                        </div>
                                        <div className='inner_pos_cake'>
                                            <img src='cakePos3.jpg' alt='cake' />
                                            <p>Cololate star cake with Eggs</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <img className="post_back" src="backPos.png" alt='poster_image' />
                </div> */}


                <div className='row'>
                    <div className='col pop_div'>
                        <h3>Cake Store</h3>
                        <h1>Our Latest Design Cake</h1>
                        <div className="main_poster">
                            <div className='cake_poster'>
                                <div className='inner_cake_poster'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxiwyvnwiDV4EWY6VioccdOolLfnC41XSfA&s" alt="Chocolate Cake" />
                                    <h3>Little Doll Cake</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                </div>
                                <div className='inner_cake_poster'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2MAx_6HUJXhN207NSQIgu-u6f2zKbG92Hg&s" alt="Chocolate Cake" />
                                    <h3>Butterflies Cake</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                </div>
                                <div className='inner_cake_poster'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8illIUmH2bP62sdJJnvatfABSYnzMUPxxgUWWNMlGE07hHqgMR1IDFQeOnvazH5GvXs&usqp=CAU" alt="Chocolate Cake" />
                                    <h3>Purple Vanila Cake</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-4 my-md-5'>
                    <div className='col-md-6 my-2'>
                        <div className='shop_button'>
                            <img src='https://img.freepik.com/premium-photo/girl-with-cake-showing-dessert-solid-color-background-bakery-happy-birthday-concept-space-fo_457222-41015.jpg?semt=ais_hybrid&w=740' alt='shopImage' />
                            <div className='shop_now'>
                                <button className=''>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 my-2'>
                        <div className='cake_slide'>
                            <Carousel
                                autoPlay
                                infiniteLoop
                                showThumbs={false}
                                showStatus={false}
                                interval={3000}
                                transitionTime={500}
                            >
                                {/* Slide 1 */}
                                <div className="slide-container">
                                    <img src="https://static.vecteezy.com/system/resources/previews/040/717/313/non_2x/ai-generated-red-velvet-cake-happy-birthday-cake-with-birthday-candles-against-a-dark-background-ai-generated-photo.JPG" alt="Chocolate Cake" />
                                    <p className="legend">Rich Chocolate Layer Cake</p>
                                </div>

                                {/* Slide 2 */}
                                <div className="slide-container">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCBg5BTJKV1BH6Qve2ur4L_RAmRDvelOTUiO4aO-gKLIA0fShcvPVuNkZ8I5M6NfYcRM&usqp=CAU" alt="Strawberry Cake" />
                                    <p className="legend">Fresh Strawberry Delight</p>
                                </div>

                                {/* Slide 3 */}
                                <div className="slide-container">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MI6PUSYVfBbc7CAoRU9O0w0xU9qWwswzFQ&s" alt="Vanilla Cake" />
                                    <p className="legend">Classic Vanilla Cream Cake</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {/* Why Choose Us */}
                    <div className="why-us-section">
                        <h2>Why Choose Us</h2>
                        <div className="why-us-grid">
                            <div className="card">🎂 100% Eggless Cakes</div>
                            <div className="card">🚚 Free Home Delivery</div>
                            <div className="card">🎉 Custom Design Available</div>
                            <div className="card">🌟 5-Star Customer Ratings</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
