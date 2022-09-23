import React, { useState, ChangeEvent } from "react";

import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import twitter from "../../assets/footer/twitter.png";
import linkIden from "../../assets/footer/linkIden.png";

import gift from "../../assets/footer/footer-gift.png";
import deal from "../../assets/footer/footer-deal.png";
import house from "../../assets/footer/footer-house.png";
import talk from "../../assets/footer/footer-talk.png";

export const Footer = () => {

    const [text, setText] = useState('Email:');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    }

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log('SUBMIT');
    }

    return (
      <>
        <footer className="">
            <div className="lg:flex text-white bottom-0 bg-[#4b4b4b] place-content-center space-y-12 lg:justify-between px-4 xl:px-24 pt-3 w-full mt-20 lg:max-h-[750px] pb-14">
                <div className="lg:max-w-md mt-12">
                    <h2 className="underline lg:pb-12 pb-4 text-3xl">
                        Contact
                    </h2>
                    <div className="space-y-10 text-2xl">
                        <div className="lg:text-left">
                            <p>
                                Level 17, PWC Building Commercial Bay Tower
                            </p>
                            <p>
                                11-19 Customs Street West, Auckland
                            </p>
                            <p>
                                CBD 1010, New Zealand
                            </p>
                        </div>
                        <div className="lg:text-left">
                            <p>
                                P.O. Box 106500, Customs Street,                        
                            </p>
                            <p>
                                AUCKLAND 1010, NEW ZEALAND
                            </p>
                        </div>
                        <div className="lg:text-left">
                            <p>
                                Phone: 09 391 4642
                            </p>
                            <p>
                                International: +64 21 642 119
                            </p>
                            <p>
                                Email: info@metronz.co.nz
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-md">
                    <h2 className="underline lg:pb-12 pb-4 text-3xl">
                        Articles
                    </h2>
                    <div className="text-left space-y-4 text-lg">
                        <div className="flex lg:place-content-start place-content-center">
                            <img src={house} alt="house" className="max-w-[80px] object-contain"/>
                            <p className="pl-3 max-w-[320px]">
                            5 Skills And Attributes Property Managers Must Have In 2022
                            </p> 
                        </div>
                        <div className="flex place-content-center">
                            <img src={deal} alt="meeting" className="max-w-[80px] object-contain"/>
                            <p className="pl-3 max-w-[340px]">
                            Privacy Laws – How A Good Property Manager Can Help You Understand What You Can And Cannot Ask Your Tenants
                            </p>
                        </div>
                        <div className="flex lg:place-content-start place-content-center">
                            <img src={gift} alt="gift" className="max-w-[80px] object-contain"/>
                            <p className="pl-3 max-w-[220px]">
                            Five Factors to Help You Decide If You Need a Property Manager
                            </p>
                        </div>
                        <div className="flex lg:place-content-start place-content-center">
                            <img src={talk} alt="chat" className="max-w-[80px] object-contain"/>
                            <p className="pl-3 max-w-[210px]">
                            Six Questions to Ask Yourself Before You Hire a Property Manager
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-md space-y-8 text-2xl">
                    <h2 className="underline lg:pb-8 pb-1 text-3xl">
                        Get Involved
                    </h2>
                    <div>
                        Make the Change Now!
                    </div>
                    <div>
                        Tennacny application
                    </div>
                    <div className=" space-y-4">
                        <div>
                            Subscribe to our newsletter:
                        </div>
                        <input type="text" className="shrink text-black p-1 rounded-3xl text-2xl pl-6 pr-10 border-green-500" onChange={handleChange} name="day" placeholder={text}/>
                    </div>
                    <div className="flex justify-between pt-12 gap-x-1 shrink ">
                        <div className="max-w-[25%]">
                            <img src={facebook} alt="facebook"/>
                        </div>
                        <div>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <div>
                            <img src={twitter} alt="twitter"/>
                        </div>
                        <div>
                            <img src={linkIden} alt="linkiden"/>
                        </div>
                    </div>
                </div>
            </div>
        <div className="text-left pt-5 pb-10 pl-24 mt-2 text-zinc-600 w-full bg-white text-sm">
            © 2022 METRO NZ PROPERTY MANAGEMENT | DISPUTES PROCESS
        </div>
        </footer>
      </>
    );
};
