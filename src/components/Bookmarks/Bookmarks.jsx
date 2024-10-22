import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 ">
            <div className='py-5 px-10 bg-[#6047EC1A] border border-[#6047EC] rounded-lg mb-6'><h1 className='text-center text-2xl font-bold text-[#6047EC]'>Spent time on read: {readingTime} min</h1></div>
            <div className='w-full bg-[#1111110D] p-7 rounded-lg'>
            <h3 className="text-2xl font-bold mb-4">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;