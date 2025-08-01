import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { motion, useInView } from "framer-motion";
const Home = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <div className='container-fluid'>
                <div className="home_poster">
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
                </div>
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
            </div>
        </>
    );
};

export default Home;
