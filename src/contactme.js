import './contact.css';
import React from 'react';


import { RiLinkedinBoxLine } from "react-icons/ri";

import { SiIndeed } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { IoIosMail   } from "react-icons/io";
import { GrMailOption } from "react-icons/gr";
import { motion } from 'framer-motion';



 function Contactme()
 

{
   

 return(
     
<div className='contact' id='contact'>

<motion.h2


initial={{opacity:0,y:-100,rotate:20}}
animate={{opacity:[0,0.5,1],y:0,rotate:0}}
transition={{type:"spring",stiffness:200,duration:2}}

>keep in touch </motion.h2>


   <motion.div className='contactsvg'
   initial={{opacity:0,y:100}}
   animate={{opacity:[0,0.5,1],y:0}}
   transition={{type:"spring",stiffness:200,duration:2}}
   >
   
       <motion.div 

initial={{opacity:0,y:100}}
animate={{opacity:[0,0.5,1],y:0}}
transition={{type:"spring",stiffness:200,duration:1}}
  whileHover={{backgroundColor:"var(--navy)",scale:0.9}}     
       
       className='mailsvg'>

           <a href="mailto:ffariedullah@gmail.com?subject=Inquiry&body=Your message here" > < GrMailOption /> <br />Mail me  </a>

       </motion.div> 

     <motion.div
     
     initial={{opacity:0,y:100}}
     animate={{opacity:[0,0.5,1],y:0}}
     transition={{type:"spring",stiffness:200,duration:1}}
     whileHover={{backgroundColor:"#59007c",scale:0.9}}
     
     className='linksvg'> <a 
    href="https://www.linkedin.com/in/farie-dullah-73577222a/"> <RiLinkedinBoxLine/> <br />Linkedin </a>
     </motion.div>
      
      <motion.div 
      
      initial={{opacity:0,y:100}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{type:"spring",stiffness:400,duration:1}}
      whileHover={{backgroundColor:"#73003bd9",scale:0.9}}
      
      className='instasvg'> <a href="https://www.instagram.com/fairy_i__/">  <BsInstagram/> <br />Insta</a>
     
      </motion.div>
      
      <motion.div 
      
      initial={{opacity:0,y:100}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{type:"spring",stiffness:400,duration:1}}

      whileHover={{backgroundColor:"#006826",scale:0.9}}
      
      className='gitsvg'> <a href="https://github.com/Faried7867/faried"> <SiGithub/> <br />Github</a> 
     
      </motion.div>

      <motion.div
      
      initial={{opacity:0,y:100}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{type:"spring",stiffness:400,duration:1}}
      whileHover={{backgroundColor:"#2600ff",scale:0.9}}
      
      className='indeed'> <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend"> <SiIndeed/> <br />indeed</a> 
     
     </motion.div>

     <motion.div 
        initial={{opacity:0,y:100}}
        animate={{opacity:[0,0.5,1],y:0}}
        transition={{type:"spring",stiffness:400,duration:1}}
        whileHover={{backgroundColor:"#0080ff",scale:0.9}}
     
     
     className='naukri'> <a href="https://www.naukri.com/mnjuser/profile?id=&altresid"> <BiGroup /> <br />Naukri</a> 
     
     </motion.div>



       
</motion.div> 











 <div className='footer'>

     <h2 className="footerheader"> contact me  &#9743; for hiring me </h2>
    
     <ul className='abt'>
          <li> Copyright © 2024 </li>
          <li> privacy policy</li>
          <li> security</li>
          <li>+91-8608313683</li>
          <li>from India</li>
          <li> <b>feel free to reach out me</b> </li>
     </ul>
    

</div> 






</div>
     );

}

export default  Contactme