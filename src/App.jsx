
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
// remove bookmarks from ui

const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
setBookmarks(remainingBookmarks);

  }



  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

  }

  return (
    <>
      <Header></Header>
     <main className='md:flex justify-between p-4 max-w-7xl mx-auto space-x-7'>
     <Blogs
     handleMarkAsRead={handleMarkAsRead}
      handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
     </main>
    </>
  )
}

export default App
