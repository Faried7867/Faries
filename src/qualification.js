import './App.css';
import './home.css'

import React from 'react';
import { useState , useref } from 'react';
import { useTransform,useMotionValue, motion, useScroll, spring } from "framer-motion";
import './qualifiaction.css'

import { MdOutlineDesktopMac } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import { FaComputer } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { FaTabletAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { RiHonourFill } from "react-icons/ri";

import certificate from "./images/certificate.pdf"

function Qualification()
{






  const { scrollY } = useScroll();




  const rotate = useTransform(scrollY,[0,100],[0,20], { clamp: false })

  const borderradius = useTransform(scrollY,[0,100],["0","5px"], { clamp: false })

  const color = useTransform(scrollY,[0,100,600,1100,1500],["#73003b5d","#00682649","#001df6","#0080ff48","#f5f5f500"], { clamp: false })



const hoverEnd ={
  animate:{boxShadow:'0px 0px 0px  #000000 ',transition:{duration:0.3}}
}



  return(
   <div className='qualificationwrap' >

<motion.div className="circle"
style={{

 
  backgroundColor:color,
  borderRadius:borderradius,
border:"1px solid red",
type:"spring",
stiffness:300,
rotate:rotate,
 x:0,
width:100,
height:100,
position:'fixed',
zIndex:2,
display:"inline-block",
// backgroundColor:"#FFC300",



}}


transition={{duration:1}}
 initial={{left:-50,opacity:0}}
animate={{left:0,opacity:[0,0.6,0.8,1]}}




>

</motion.div>

<motion.div className='whatido'

initial={{opacity:0,x:10}}
animate={{opacity:[0,0.5,1],x:0}}
transition={{duration:0.5,delay:0.2}}

  >



  <div className='uiux'>

    <h4>ui ux  <br />  <span> <HiUserGroup /> 
      <FaChalkboardUser/> </span>
      
    </h4>
    <p>I possess the skills to design user interfaces and user experiences for applications, transforming wireframes into fully functional interactive applications <br />I craft captivating UI/UX designs that spark user engagement,making your website both stunningly beautiful and effortlessly intuitive  </p>
  </div>
  
        



  <div className='website'>
    <h4 >Design / Development<span>< MdOutlineDesktopMac/> 
    <FaLaptopCode/>< FaComputer/></span></h4>
    <p>I am skilled in crafting responsive web designs that seamlessly adapt to any screen size.  I can design and develop a full frontend web page that is both functional and visually appealing. <br />I craft user-centric web applications, building them from scratch to fully functional experiences that deeply engage users by understanding their needs. </p>
  </div>
  

  
  <div className='mobile'  >
    <h4>mobile first aproach
     <span>
    <CiMobile3/>< FaTabletAlt/></span></h4>
    <p> In my design process, the mobile-first approach, resulting in unique and responsible designs that cater to the needs of mobile users. <br /> Mobile web applications offer an effortless and intuitive experience, perfectly suited for the needs of mobile users Designed for convenience, mobile web applications provide quick access to information and functionality right at your fingertips. </p>
  </div>

  </motion.div>



<motion.div className='degreewrap'



>




   <motion.div className='bsawrap'

   initial={{opacity:0,x:50}}
   transition={{delay:0.2,duration:0.5,type:"spring",stiffness:400}}
 
   whileInView={{opacity:[0.4,0.6,0.8,1],x:0}}




  whileHover={{boxShadow:'0px 0px 30px  #0c7c00 ' }}
  variants={hoverEnd}
  animate="animate"



   >

    <h4 className='bca'>BACHELOR OF COMPUTER APPLICATION -- BCA (2019-2022)
    <span><TbStarsFilled/>
    <RiHonourFill/></span></h4>
    
     <p> I am a graduate of B.S.Abdur Rahman Crescent Institute of Science & Technology (BSACIST) in Chennai, having completed my studies in [Year of Graduation]. My time at BSACIST, located near Vandalur, was an enriching academic journey that significantly expanded my knowledge base. I graduated with a First Class and a CGPA of 6.7, reflecting my dedication to academic excellence. The university, established in 2023, fosters a supportive learning environment that empowers students to thrive.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius consequatur molestias eveniet sunt harum. Officia minima pariatur neque aut nihil, mollitia inventore blanditiis ipsam dicta magni deleniti, est necessitatibus.
     </p>

   </motion.div>

<br /><br />

 <motion.div className='mcawrap' 
 
 initial={{opacity:0,x:-50}}
 transition={{delay:0.2,duration:0.5,type:"spring",stiffness:400}}
//  animate={{x:0}}
 whileInView={{opacity:[0.4,0.6,0.8,1],x:0}}


 whileHover={{boxShadow:'0px 0px 30px  #0000fe' }}
 variants={hoverEnd}
 animate="animate"
 >
   <h4 className='MCA'>MASTER OF COMPUTER APPLICATION -MCA (2022-2024)
   <span><FaUserGraduate/></span></h4>
    
    <p>I am currently completing my final year of MCA studies at the prestigious Madras Institute of Technology ( M.I.T ), where I have gained valuable knowledge and honed my skills, preparing me for the next stage of my professional journey..



    



 <div className='certpro '>
<p className='projects'>
  <b>Projects</b>  - <i>Online Catering service <b>in UG</b>,Web application my portfolio,UI ant Design, minimalist animation</i>
   </p>

 <p className='certficate' >
   <b> My Course completion certificate</b> <a href={certificate} > click to  visit my certificate </a>
 </p>
</div> 
</p>
 </motion.div> 
</motion.div>
{/* /*degreewrap end*/}

   </div>
    );
}

export default Qualification