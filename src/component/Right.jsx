import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import "./right.css";
import UserContext from '../contexts/UserContext';

function Right() {
  const {showContact,setShowContact}=useContext(UserContext)
  const arr = [
    "http://localhost:5173/src/assets/Group2.png",
    "http://localhost:5173/src/assets/group1.jpeg",
    "http://localhost:5173/src/assets/Group2.png",
    "http://localhost:5173/src/assets/group1.jpeg"
  ];
  
  const [count, setCount] = useState(0);
  const rightRef = useRef(null);
 
  useEffect(() => {
    
    rightRef.current.style.backgroundImage = `url("${arr[count]}")`;
    console.log(window.getComputedStyle(rightRef.current).backgroundImage);

  
  }, [count]);

  const back = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count)
    }
    else{
      setCount(arr.length-1)
      console.log(count)
    }
  };

  const front = () => {


    if (count == arr.length - 1) {
      setCount(0);
      console.log(count)
    }
    else{
      setCount(count + 1);
      console.log(count)
    }
    // if (count < arr.length - 1) {
    //   setCount(count + 1);
    // }
  };

  return (
    <div id='slide' className='right' ref={rightRef}>
      <div className="rupper">
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li onClick={()=>{
            setShowContact(!showContact)
          }}>Contact</li>
        </ul>
      </div>
      <div className="rlower">
        <h3>Type Text</h3>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe odio numquam!</p>
          <div className="slider">
            <button id='b' onClick={back}></button>
            <button id='f' onClick={front}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
