import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { motion, useInView } from "framer-motion";
import { HiUserGroup } from "react-icons/hi";     // Heroicons
import { FaBirthdayCake, FaLeaf, FaTruck, FaHeart } from 'react-icons/fa';
// import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Home = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setSlidesToShow(1);
            } else if (width < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlides(); // Call once on mount
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const slideWidth = 100 / slidesToShow;
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

    ];


    const reviews = [
        {
            name: "Priya Sharma",
            city: "Delhi",
            text: "Delicious and beautiful cake! Made my daughter’s birthday extra special.",
            rating: 5,
        },
        {
            name: "Amit Verma",
            city: "Lucknow",
            text: "Timely delivery and perfect design. Loved it!",
            rating: 4,
        },
        {
            name: "Neha Gupta",
            city: "Mumbai",
            text: "Best eggless cake in town!",
            rating: 5,
            imgLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GMB1vilCfaiB5RZTIGCrDyhzy1kJ-P4kLZvfkTlEyJMl5eUcstEFBr2n2C_7w5U8eUM&usqp=CAU',
        },
        {
            name: "Ravi Kumar",
            city: "Noida",
            text: "Amazing taste and service!",
            rating: 5,
        },
        {
            name: "Simran Kaur",
            city: "Chandigarh",
            text: "Fresh and beautiful design.",
            rating: 4,
            imgLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyyZvbCWlcnmyXz9Debel4Lh5JI9XuXorRUB6u5jL64jcbOtckSlV31MxepXFGJDkc7w&usqp=CAU'
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <>
            <div className='container-fluid'>
                <div className="poster_content row">
                    <div className='col-md-5 '>
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

                    <div className='col-md-7 '>
                        <div className='col mt-md-0 mt-5'>
                            <p className='customer_title col mt-md-0 mt-5 pt-4 py-md-0 my-4 '>
                                <span className='qutos'>"</span>Custom cakes, lovingly handmade and delivered with a smile.<span className='qutos'>"</span><br />
                                <span className='qutos'>"</span>From birthdays to big days - we don't just create cakes, we create memories.<span className='qutos'>"</span>
                            </p>
                        </div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className='poster_main_image'>
                                <div className="slide_div">
                                    <h2 className='text-center'>Most Ordered Cakes</h2>
                                    <Carousel
                                        showThumbs={false}
                                        showStatus={false}
                                        infiniteLoop
                                        autoPlay
                                        interval={2500}
                                        swipeable
                                        emulateTouch
                                        stopOnHover
                                        showArrows={true}
                                        centerMode
                                        centerSlidePercentage={slideWidth}
                                    >
                                        {
                                            tradingCake.map((cake, index) => (
                                                <div key={index} className='inner_slide_div'>
                                                    <div className="duration-300 h-full" >
                                                        <img
                                                            className='slide_image'
                                                            src={cake.tradImage}
                                                            alt={`Cake cake`}
                                                        />
                                                        <p className='offer_cake'>
                                                            <HiUserGroup className='offer_icon' /> 474 Order</p>
                                                        <div className="">
                                                            <h4>Cocolate Cake</h4>
                                                            <a
                                                                href={cake.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Order Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className='row mt-md-2 mt-5'>
                    <div className='col'>
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
                </div>

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

                    {/* Popular Cakes */}

                </div>

                <div className="home_poster">
                    <div className='home_poster_content'>
                        <h3>Welcome to CakeStore</h3>
                        <h4>Sweet Moments, Baked Fresh.</h4>
                        <p>
                            At CakeStore, we believe every celebration deserves something truly special. From melt-in-your-mouth cupcakes to luxurious wedding cakes, we craft every bite with love, precision, and the finest ingredients.
                        </p>
                    </div>
                    <img className='img_home_poster' src='https://media.istockphoto.com/id/1420145027/photo/slice-of-birthday-cake-with-gold-birthday-cake-candle-and-pink-frosting.jpg?s=612x612&w=0&k=20&c=8oeaFtIo-1A79qD-C0ARZEhAeQtnlohQU0ttc4fehIA=' alt='store poster' />
                </div>

                <div className="row about_main my-4">
                    <div className='col-md-7 my-3'>
                        <div className='about_content_div'>
                            <p>At our cake shop, baking isn't just a business — it's our passion. From the softest sponges to the richest frostings, every bite is a celebration of love, joy, and sweetness.
                                We specialize in custom cakes for every occasion — be it birthdays, weddings, anniversaries, baby showers, or just your daily sweet craving..!!
                            </p>
                        </div>
                    </div>
                    <div className='col-md-5 my-3 text-center'>
                        <img className='about_store' src='https://img.freepik.com/premium-photo/caucasian-woman-holding-birthday-cake-isolated-blue-background-saluting-with-hand-with-happy-expression_1368-210963.jpg?w=360' alt='imge_man' />
                    </div>
                </div>

                <div className='choose_div row'>
                    <div className='col-12 my-4 text-center' style={{ color: '#d6336c' }}>
                        <h3>What Makes Us Special?</h3>
                    </div>
                    <div className='choose_div_box col-lg-3 my-2 col-md-6 col-12'>
                        <div className='choose_card h-100'>
                            <FaBirthdayCake className="chose_div_icon" color='#d6336c' />
                            <p>Custom cakes for all celebrations</p>
                        </div>
                    </div>
                    <div className='choose_div_box col-lg-3 my-2 col-md-6 col-12'>
                        <div className='choose_card h-100'>
                            <FaLeaf className="chose_div_icon" color='green' />
                            <p>100% Eggless & Vegan Options</p>
                        </div>
                    </div>
                    <div className='choose_div_box col-lg-3 my-2 col-md-6 col-12'>
                        <div className='choose_card h-100'>
                            <FaTruck className="chose_div_icon" color='blue' />
                            <p>Timely doorstep delivery</p>
                        </div>
                    </div>
                    <div className='choose_div_box col-lg-3 my-2 col-md-6 col-12'>
                        <div className='choose_card h-100'>
                            <FaHeart className="chose_div_icon" color='red' />
                            <p>Baked with love & care</p>
                        </div>
                    </div>
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

                {/* customer review */}
                <div className='row'>

                    <div style={{ overflow: 'hidden' }} className="max-w-6xl mx-auto px-2 my-10">
                        <h2 className="text-3xl font-bold text-center mb-6">What The Customer Says</h2>
                        <Slider {...settings}>
                            {
                                reviews.map((review, index) => (
                                    <div key={index} className="p-3 h-100 main_review">
                                        <div className="review_div">
                                            <div className="rev_name">
                                                <div>
                                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MMIrBlBJttU3237QobKx5By7QgIfFgI2OQ&s' alt='customer image' />
                                                </div>
                                                <div>
                                                    <p>— {review.name}, {review.city}</p>
                                                </div>
                                            </div>
                                            <div className='rew_text'>
                                                <p className="">"{review.text}"</p>
                                                <div className='rate_view'>
                                                    <span>Rate : </span>
                                                    {
                                                        [...Array(review.rating)].map((_, i) => {
                                                            return (
                                                                <>
                                                                    <FaStar className='rate' key={i} />
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <p className="review_date">Posted Datd : 12-05-2025</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
