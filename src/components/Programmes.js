import React from "react";
import './Programmes.css';
import {programsData} from '../data/programsData';
import RightArrow from "../assets/rightArrow.png";



const Programmes = () => {
    return (
        <div className="programmes" id="programmes">
            <div className="programmes-header">
                <span className="stroke-text">Explore our</span>
                <span>programmes</span>
                <span className="stroke-text">to shape you</span>

            </div>
            <div className="program-categories">
                {
                    programsData.map((program) => (
                            <div className="category">
                                {program.image}
                                <span>{program.heading}</span>
                                <span>{program.details}</span>
                                <div className="join-now">
                                    <span>Join Now</span>
                                    <img src={RightArrow} />

                                </div>
                            </div>
                        )
                    )
                }

            </div>

        </div>
    )
}


export default Programmes;