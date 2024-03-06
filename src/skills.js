import React from "react";
import { motion ,spring,useScroll,useTransform} from "framer-motion";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiTsnode } from "react-icons/si";
import { SiAngularjs } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import { SiBabel } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { SiAdobeillustrator } from "react-icons/si";
import { PiFigmaLogoLight } from "react-icons/pi";
import { SiAdobexd } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiNpm } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import  './App.css';
import './skill.css'
function Skills()


{
    
   const { scrollYProgress } = useScroll();

     const animationVariants = {
       initial: {
         opacity: 0.5,
         scale: 1,
       },
       scrolledIn: {
         opacity: 1,
         scale: 1.2,
       },
     };
    

   

     return(

          <motion.div className="bgwrap"  id="skills"
          
          
         
     

          >

       <motion.div
       
       className="skillswrap"
       
       >
<div id="flowe">

 <motion.div className="programminglanguage"




 initial={{opacity:0,x:30}}
 animate={{opacity:[0,0.5,1],x:0}}

 transition={{delay:0.2,duration:0.5,type:"spring",stiffness:400}}
 
 >
                    <h2>Skills in Front end Technology  </h2>
                    <span><ImHtmlFive /><br />
                    <SiCss3/>  <IoLogoJavascript/></span>
                   
                    <p>I possess strong proficiency in the web development languages With my proficiency in HTML5, CSS3, JavaScript, and other front-end tools, I'm confident in contributing effectively to your development team and producing high-quality front-end solutions  my commitment to building exceptional and engaging web experiences.</p>
               </motion.div>


               <motion.div  className="frameworks"
               
               initial={{opacity:0,x:-30}}
               animate={{opacity:[0,0.5,1],x:0}}
               transition={{delay:0.4,duration:0.6,type:"spring",stiffness:400}}
               
               >
               <h2> I Used to Build an web Application</h2>
                   <span> <SiReact/>
                   <TbBrandNodejs/>
                   <DiNpm/></span>
                    <p>I possess a strong skillset in React, Node.js, npm, and other frontend frameworks, actively expanding my knowledge to stay ahead of the curve. I'm a fast learner with a proven ability to adapt to new technologies quickly and effectively</p>
               </motion.div>

               </div>
               <motion.div className="designingsframeworks"
                  initial={{opacity:0,x:50}}
                  transition={{delay:0.2,duration:0.7,type:"spring",stiffness:300}}
                 //  animate={{x:0}}
                  whileInView={{opacity:[0.4,0.6,0.8,1],x:0}}
               
               
               >
               <h2> I Used Framworks for Designe</h2>
                   <span> <BiLogoTailwindCss/>  <SiGreensock/>
                  < TbBrandFramerMotion/> </span>
                    <p>Armed with the animation mastery of Framer Motion, the precision of Tailwind, and the control of GSAP, I craft stunning user interfaces and experiences that seamlessly blend animation and interaction design. Bringing websites and applications to life is my passion, and I'm proficient in handling both the visual flourish and the intuitive functionality that empowers users</p>
               </motion.div>


{/*                
         <img src={require('./images/Rectangle3.png')} alt="hello" className="bgimage2" /> */}



               <motion.div className="desiningtools"
               
               initial={{opacity:0,x:-50}}
               transition={{delay:0.5,duration:0.7,type:"spring",stiffness:300}}
              //  animate={{x:0}}
               whileInView={{opacity:[0.4,0.6,0.8,1],x:0}}
               
               >
               <h2>  I Used to Designing Product </h2>
                  <span><PiFigmaLogoLight/>
                  <SiAdobexd/>
                  <SiAdobeillustrator/></span>
                    <p>My expertise in Figma, Adobe XD, and Adobe Illustrator equips me to create compelling user interfaces, but designing an entire application demands additional skills in prototyping, interaction design, user experience (UX) principles, and potentially coding depending on the complexity</p>
               </motion.div>
               
               <motion.div className="svgofallskills" 
               
               initial={{opacity:0,y:100}}
               transition={{delay:0.4,duration:0.7,type:"spring",stiffness:100}}
              //  animate={{x:0}}
               whileInView={{opacity:[0.4,0.6,0.8,1],y:0}}


               >
               <h2> skills in  all over these tools</h2>
                    <span>
                    <DiSass/>
                   < TbBrandTypescript/>
                   <SiBabel/>
                   <TbBrandVscode/>
                   <IoIosGitBranch/>
                   <SiMongodb/>
                   <SiBootstrap/>
                   <SiAdobephotoshop/>
                   <IoLogoNodejs/>
                   <SiAngularjs/>
                   <SiTsnode/>
                   <TbSql/>
                  < SiMysql/>
                  <TbBrandNextjs/>
                  <FaVuejs/>
                    </span>
                   
               </motion.div>


          </motion.div>
          </motion.div>  );
}


export default Skills