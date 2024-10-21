
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
const[bookmarks, setBookmarks] = useState([]);
const[timesUp, setTimesUp] = useState(0);
const handleBookmark = blog =>{
 const newBookmark = [...bookmarks, blog];
 setBookmarks(newBookmark)
}
const handleTime =(id, time) =>{
  const newTimesUp =timesUp + time;
  setTimesUp(newTimesUp)
  const newTimesUp1 = bookmarks.filter(bookmark => bookmark.id !== id);
setBookmarks(newTimesUp1)
  }
  return (
    <>
     
     <Header></Header>
     <main className='flex justify-between flex-col lg:flex-row  gap-12'>
     <Blogs handleBookmark= {handleBookmark} handleTime ={handleTime }></Blogs>
     <Bookmarks bookmarks={bookmarks} timesUp={timesUp}></Bookmarks>
     </main>
    
  
    </>
  )
}

export default App
