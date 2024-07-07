
import './App.css'
import Right from './component/Right'
import Left from './component/left'
import Contact from './component/Contact'

import UserContextProvider from './contexts/UserContextProvider'


function App() {
 
  return (
    <UserContextProvider>
    <div className='main'>
     <div className="leftComp">
       <Left/>
     </div>
     <div className="rightComp">
     <Right/>
     </div>
      
    </div>
    <Contact />
    </UserContextProvider>
  )
}

export default App
