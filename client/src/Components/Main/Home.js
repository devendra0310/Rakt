import React, { useState } from "react";
import p1 from "../../naye_chitra/p1.jpeg";
import p2 from "../../naye_chitra/p2.jpeg";
import p3 from "../../naye_chitra/p3.jpeg";
import p4 from "../../naye_chitra/p4.jpeg";
import m1 from "../../naye_chitra/m1.jpeg";
import m2 from "../../naye_chitra/m2.jpeg";
import m3 from "../../naye_chitra/m3.jpeg";
import m4 from "../../naye_chitra/m4.jpeg";
import Group5 from "../../naye_chitra/Group5.png";
import Group6 from "../../naye_chitra/Group6.png";
import Group7 from "../../naye_chitra/Group7.png";
import Group8 from "../../naye_chitra/Group8.png";
import gplay from "../../naye_chitra/gplay.png"
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from  'react-icons/rx';
import FaqElem from '../Util/FaqElem';
import Navbar from "./Navbar";
const Home = () => {
  const { loggedIn, user } = useContext(AuthContext);
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" },
  ];
  const temp2 = [
    {
      title: "Registration",
      img: p1,
      p: "We will sign you in and go over basic eligibility.You will be asked to show ID, such as Aadhar Card.You will read some information about blood donation.",
    },
    {
      title: "Health History",
      img: p2,
      p: "You will answer a few questions about your health history and places you have traveled.You will tell us about any medication that may be in your system.",
    },
    {
      title: "Your Donation",
      img: p3,
      p: "If you are donating blood, we will cleanse an area on your arm and insert a brand new sterile needle for the blood draw.Other types of donations.",
    },
    {
      title: "Refreshment and Recovery",
      img: p4,
      p: "After donating blood, you will have a snack and a drink in the refreshment area.You can leave after 10-15 minutes and continue your normal routine.",
    },
  ];
  const questions = [
    {
      id:1,
      question:'How long does it take to donate blood?',
      answer:'Whole blood donation takes about 45-60 minutes.Apheresis blood donation (double red cells, platelets, plasma) takes about 1 1/2-2 hours.'
    },
    {
      id:2,
      question:'How often can I donate blood?',
      answer:'The minimum donation frequency for whole blood donation is every 56 days. This donation frequency can vary among blood donation sites. At the Rakt Foundation, for example, you can donate whole blood every 84 days. Talk with donor center staff about specific requirements.'
    },
    {
      id:3,
      question:'At what age can I start donating blood?',
      answer:'To donate blood, you must be at least 16 or 17 years old, depending on the law in your state. In India, eligible 16-year-olds can donate blood. Donors must have the consent of a parent or guardian and weigh at least about 50 kilograms. During the appointment, donors will complete a brief health questionnaire with  health care professional to make sure blood donation is safe for both the donor and the recipient of the blood.'
    },
    {
      id:4,
      question:'Can I donate blood if I am taking medicine?',
      answer:'Most medicines do not prevent you from donating blood. Common medicines — such as those used to control blood pressure, birth control pills and the type of medicines you can get without a prescription — do not affect your eligibility. If you plan to donate platelets, you need to have stopped using aspirin or any aspirin-containing medicine 48 hours before your appointment. If you are re taking antibiotics to treat a current infection, you must complete the course before donating. For more information about other medicines, contact the Blood Donor Program.'
    },
    {
      id:5,
      question:'Can I donate if I recently had a tattoo or ear or body piercing?',
      answer:'Getting a tattoo or piercing recently from a licensed establishment does not make you ineligible to donate blood.'
    },
  ]

  const [data,setData]=useState(questions);
  const [show,setShow]=useState(false);

  const [currentIndex,setCurrentIndex]=useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex= isFirstSlide ? temp2.length-1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === temp2.length-1;
    const newIndex= isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="dark:text-white-900 w-full">
      <div className="home w-full text-[#FFFFFF] flex flex-col max-h-[727px] px-[63px]">
        <Navbar
          logIn={loggedIn}
          user={loggedIn && user.latitude ? "bank" : "user"}
        />
        <div className="py-[90px]">
        <div className=" ccc text-[42px] font-[900] leading-[56.25px]">
          <span className="text-[#CB2121]">Sharing Life ,</span>
          <span className="text-[#FFFFFF]">One Drop at a Time</span>
        </div>
        <p className="font-[400] leading-[27px] text-[17px] max-w-[702px] pt-[20px]">
          We link up people who provide blood donations with those who need it,
          so that the donor can witness the positive outcome of their
          contributionin someone's life.
        </p>
        <div className="flex text-[18px] pt-[40px] gap-2">
          <div className="bg-[#CB2121]  border-[#CB2121] all-btn">
            Request Blood
          </div>
          <div className="all-btn">
            Donate Blood
          </div>
        </div>
        </div>

        
      </div>

      <div className="text-[#FFFFFF] bg-[#CB2121] flex flex-col px-[63px]">
        <h2 className="text-[40px] leading-[52.73px] font-[900] mt-4 mb-4">Save Lives, Be a Real Hero</h2>
        <div className="flex gap-16 mb-4">
          <p className="text-[17px] leading-[26px] font-[400] w-2/3">
          Donating blood is a noble act that not everyone can do. With advancements in medicine, the need
          for blood has increased threefold since the industrial revolution. Every year, India has a deficit of 
          between 30% and 35%. It is absurd to say that the country cannot meet this requirement with 1.2
          billion people. The real challenge is not the lack of blood donors, but finding someone willing to 
          donate when needed. Therefore, the aim should be to create a system of people who can help each
          other in emergencies. Below are some benefits donating blood
          </p>
          <div className='flex items-center gap-2'>
          <a href="/register/patient" className="all-btn bg-[#FFFFFF] text-[#000000]">Register Now</a>
          <div className="all-btn">Explore More</div>
          </div>
        </div>
      </div>


      {/* AIM  */}
      <div className="bg-[#F5F5F5] text-[#000000] flex flex-col items-center">
        <h2 className="text-[64px] font-[500] leading-[75px] mt-12">Our Aim</h2>
        <div className="flex  w-[1080px] mt-[100px] mb-[100px] gap-4">
        <div className="bg-[#FFFFFF] flex flex-col items-center text-center w-[250px] h-[200px] p-4">
          <img src={Group5} width={80}></img>
          <p className="font-[400] text-[20px]">Digitalizing of  Blood  Donation Process </p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center text-center w-[250px] h-[200px] p-4">
          <img src={Group6} width={80}></img>
          <p className="font-[400] text-[20px]">Promote ease of Donating Blood</p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center text-center w-[250px] h-[200px] p-4">
          <img src={Group7} width={80}></img>
          <p className="font-[400] text-[20px]">Spread Blood Donation Awareness</p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center text-center w-[250px] h-[200px] p-4">
          <img src={Group8} width={80}></img>
          <p className="font-[400] text-[20px]">Build a  Blood Donation ecosystem</p>
        </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] text-[#000000] flex flex-col items-center">
        <h2 className="text-[64px] font-[500] leading-[75px] mt-12">Blood Donation Process</h2>
        <div className="flex  w-[1080px] mt-[100px] mb-[100px] gap-4 items-center relative">
        <img className="w-[300px] h-[220px] rounded-3xl relative left-12" src={temp2[currentIndex].img}></img>
        <div className="bg-[#FFFFFF] rounded-3xl flex flex-col gap-6 w-[600px] py-16 px-16">
          <div className="font-[500] text-[30px] flex items-center">
        {currentIndex+1}. {temp2[currentIndex].title}
          </div>
          <p className="font-[400] text-[20px]">{temp2[currentIndex].p}</p>
          <button className=" bg-red text-[#FFFFFF] rounded-full p-1 w-[150px]">Learn More</button>
        </div>
        </div>

        <div className="flex">
         {
          temp2.map((tem) => {
            <div key={tem.title} className="text-4xl cursor-pointer">
              <RxDotFilled/>
            </div>
          })
         }
        </div>

        <div className="relative left-[-560px] bottom-[270px] cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="relative right-[-450px] bottom-[290px] cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
         
      </div>


      <div className="bg-[#F5F5F5] text-[#000000] flex flex-col items-center">
        <h2 className="text-[64px] font-[500] leading-[75px] mt-12">Myths</h2>
        <div className="flex  w-[1080px] mt-[100px] mb-[100px] gap-4 justify-center">
        <img src={m1} width={250}></img>
        <img src={m2} width={250}></img>
        <img src={m3} width={250}></img>
        <img src={m4} width={250}></img>
        </div>
      </div>

      <div className="bg-[#F5F5F5] text-[#000000] flex flex-col items-center">
        <h2 className="text-[64px] font-[500] leading-[75px] mt-12">FAQ'S</h2>
        <div className="main-div mt-12 mb-12 bg-[#CB2121]">
        {
          data.map((curElem) => {
            const {id} = curElem;
            return <FaqElem key={id} {...curElem} />
          })
        }
        </div>
      </div>
      

      {/* FOOTER  */}
      <div className="bg-[#CB2121] text-[#FFFFFF] pt-[30px] pb-[30px]">
        <div className="flex w-[1080px] justify-center gap-4 px-[50px] mx-auto">
        <div className="flex flex-col w-1/5">
          <h3 className="font-bold text-[20px]">Save Life</h3>
          <div className="flex flex-col text-[15px] pt-[10px]">
          <div className="">Donate Blood</div>
          <div>Request Blood</div>
          <div>Find Blood Bank</div>
          <div>Find Hospital</div>
          <div>Find Blood Camp</div>
          <div>Find Labs</div>
          </div>
        </div>

        <div className="flex flex-col w-1/5">
          <h3 className="font-bold text-[20px]">Register</h3>
        <div className="flex flex-col text-[15px] pt-[10px]">
        <div>Donor Signup</div>
        <div>Blood Bank Sign Up</div>
        <div>Hospital Sign Up</div>
        <div>Lab Sign Up</div>
        </div>
        </div>

        <div className="flex flex-col w-1/5">
          <h3 className="font-bold text-[20px]">Company</h3>
        <div className="flex flex-col text-[15px] pt-[10px]">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        </div>
        </div>

        <div className="flex flex-col w-1/5">
          <h3 className="font-bold text-[20px]">Download App</h3>
          <img src={gplay} width={150}></img>
        </div>

        <div className="flex flex-col w-1/5">
          <h3 className="font-bold text-[20px]">RAKT</h3>
          <p className="text-[15px] pt-[10px]">Rakt is an platform that that helps to streamline blood donation and blood request which puts the power to save a life in the palm of your hand</p>
        </div>
        </div>

      </div>


    </div>
  );
};

export default Home;
