import React from "react";
import './Hero.css'
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
const Hero = () => {

    const transition = {type: 'spring', duration : 3};
    const mobile = window.innerWidth<=768 ? true : false;
    return (
        <div className="hero" id="home"> 
            <div className="blur hero-blur">

            </div>
            <div className="left-h">
                <Header />
                <div className="banner-ad">
                    <motion.div
                    initial={{left: mobile? "178px": '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}


                    ></motion.div>
                    <span>the ultimate fitness hub in Roysambu</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Achieve </span>
                        <span>Your</span>
                        </div>
                        <div>
                            <span>Body Goals</span>

                        </div>
                        <div>
                            <span>we will help you achieve your dream body shape</span>
                        </div>

                </div>

                <div className="figures">
                    <div>
                        <span>
                        <NumberCounter end={20} start={0} delay='4' preFix="+"/>
                        </span>
                        <span>expert trainers</span>
                    </div>
                    <div>
                    <span>
                        <NumberCounter end={500} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                    <span>
                        <NumberCounter end={30} start={0} delay='4' preFix="+"/>
                        </span>
                        <span>fitness Programmes</span>
                    </div>

                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>

                </div>
            </div>

            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div 
                initial={{right: "-1rem"}}
                whileInView={{right: "4rem"}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back" />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        
                    </div>
                </div>
                </div>
        </div>
    )
}






export default Hero