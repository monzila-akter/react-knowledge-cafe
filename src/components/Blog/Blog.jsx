import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog

    return (
        <div className='mb-16'>
            <div className='mb-8'><img className='w-full rounded-lg' src={cover} alt="" /></div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex space-x-6 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-[#11111199] font-medium text-base'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center text-[#11111199]'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>{handleAddToBookmarks(blog)}} className='text-xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <div>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p className='mb-5 text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>{handleMarkAsRead(reading_time)}} className='text-xl font-semibold text-[#6047EC] underline'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;