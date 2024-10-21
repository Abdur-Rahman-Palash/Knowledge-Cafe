import PropTypes from 'prop-types'
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks, timesUp}) => {
    return (
        <div className="md:w-2/3">
            <div>
                <h3>Reading time:{timesUp} min read</h3>
            </div>
            <h3>Book Marks {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    timesUp: PropTypes.number
}
export default Bookmarks;