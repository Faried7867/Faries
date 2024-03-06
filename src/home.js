import React from 'react';
import './home.css';
import './skill.css';
import { delay, motion } from "framer-motion";

function Home()
{

     const variants = {
          visible: i => ({
            opacity: 1,
            transition: {
              delay: i * 0.3,
            },
          }),
          hidden: { opacity: 0 },
        }

   const bgarray =["bg2","bg3","bg4","bg5"]
 
     return(


 <motion.div initial={{opacity:0,}}
 animate={{opacity:[0,0.5,1],}} 
 transition={{delay:0.5,duration:3,}}> 









<motion.div className='bgimgwrap'>

<div className='bg1' ></div>

{bgarray.map((value,i) =>
 (
   <motion.div


 
   
   
   
   className={value} 
      custom={i}

     initial={{opacity:0,translateX: i % 2 === 0 ? -150 : 150}}

      animate={{opacity:[0,0.5,1],translateX:0,
      }}
     transition={{delay:i * 0.3,duration:3}}

  
     > 
  </motion.div>
))}
    </motion.div>
        




<div className='wrap'>
     <p className='di'>Designer</p>
     <motion.p
  initial={{textShadow:"  0px 0px 30px  var(--green)",}}
  animate={{textShadow:"  0px 0px 0px var(--green) ",}}

  whileHover={{color:"var(--navy)"}}
    
 transition={{repeat:Infinity,repeatDelay:2,duration:1}}

      className='web'> WEB ,.</motion.p>
     <p className='de'> Developer</p>
    <div className='namewrap'>
         <motion.p 

        initial={{textShadow:"  0px 0px 0px  #710071",x:1}}
        animate={{textShadow:"  0px 0px 35px  #710071",x:0}}
        transition={{duration:1,repeat: Infinity}}


         className='name' id='name'> I'm farie</motion.p>
         <p className='name'>My passion lies in front-end development
         specializing in building user-centric and visually engaging experiences.</p> </div>
    <motion.div 
     drag
     dragConstraints={{ left: -10, right: -10,bottom:-10,top:-10 }}
     dragElastic={0.1}
     dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
     dragMomentum={false}
    className='img'> </motion.div> 

  
         
   


</div>    
       
</motion.div>  

         
     );
}
export default Home;
