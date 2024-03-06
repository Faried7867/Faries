import React from 'react';
import {motion} from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Routes, Route,Navigate,Link } from "react-router-dom";
import Home from "./home";
 import Qualification from './qualification';
 import Skills from './skills';
 import Contactme from './contactme';
  import resume from "./images/MY RESUME.pdf";
import './App.css';




function App() 
{
return (
 

<>
<motion.div 
  style={{position:"absolute",left:"-1%",zIndex: 5,backgroundColor: "transparent",backdropFilter: "blur(20px)",}}

  initial={{width:"100vw",height:"100vh",}}
   animate={{height:"0px",}}
  transition={{delay:1.5,duration:2.5,ease:"easeIn"}}
>

</motion.div>
<BrowserRouter>

<ul>
 <li >
      <Link to="/Faries" id='home'
      className='homeicon'> <FaHome/></Link>
</li>

   <li >
  <Link to='/qualification'>QUALIFICATION</Link>
   </li>

  <li  > 

  <Link to='/skills'>SKILLS</Link> 

   </li>

 
    <li >
    <Link to="/contact" >CONTACT</Link>
     </li>

  

     <li className='RESUME'>
       
       <a href={resume} >  RESUME <FaDownload/> </a>
   
     

      </li>


      
      <li> <div className='logo'> </div> </li>

      </ul>

<Routes>
       

      

         <Route path='/Faries' index  element={<Home/>} />

          <Route path="/qualification" element={<Qualification />} />

          <Route path="/skills" element={<Skills />} />

          <Route  path='/contact' element={<Contactme />} />
      

      </Routes>
    </BrowserRouter>

</>
  )
   
   
 }
 

  


export default App;
