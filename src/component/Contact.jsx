import React, { useContext } from 'react'
import "./contact.css"
import UserContext from '../contexts/UserContext'
function Contact() {
  
const {showContact,setShowContact}=useContext(UserContext)

if(showContact){

  return (
   <div className='contactMain'>
     <div className="contactIn">
         <div className="cross">
           <span onClick={()=>{
            setShowContact(!showContact)
           }}>X</span>
         </div>
         <h1>Contact</h1>
         <p>Lorem ipsum is simply the dummt text of printing</p>
     </div>
   </div>
  )
}
return(
  <>
  
  </>
)

}

export default Contact
