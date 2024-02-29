import React from 'react';
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./home";
 import Qualification from './qualification';
 import Skills from './skills';
 import Contactme from './contactme';
 import resume from './images/MY RESUME.pdf'

import './App.css';




function App() 
{
 return (
 <> 


<BrowserRouter>


<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>
 <li >
      <Link to='/'
      className='homeicon'> <FaHome/></Link>
</li>

   <li >
    <Link to='qualification'>QUALIFICATION</Link>
   </li>

  <li  > 

  <Link to='skills'>SKILLS</Link> 

   </li>

 
    <li >
    <Link to="contactme" >CONTACT</Link>
     </li>


  

     <li className='RESUME'>
       
       <a href={resume} >  RESUME </a>
   
      <FaDownload/>

      </li>

      <li>
      
<motion.div
initial={{rotate:0}}
animate={{rotate:360}}
transition={{duration:1}}
 className='logo'> 

 
</motion.div> 
      </li>

      </motion.ul>



  










      <Routes>
        <Route>

          <Route path='/' element={<Home />} />

          <Route path="qualification" element={<Qualification />} />

          <Route path="skills" element={<Skills />} />

          <Route path="contactme" element={<Contactme />} />
        </Route>

      </Routes>
    </BrowserRouter>





 


 


































 





































 </>
  )
   
   
 }
 

  


export default App;
