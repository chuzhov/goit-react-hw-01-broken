//import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ( props ) => {

    const { user : { avatar, username, tag, location, stats : {followers, views, likes} } }= props;
    
    return ( <div className="profile">
        <div className="description">
            <div className="image-wrapper">
                <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                />
            </div>
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li className="stats__item">
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
            </li>
            <li className="stats__item">
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
            </li>
            <li className="stats__item">
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
            </li>
        </ul>
        </div>
  )
}

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired, 
//     location: PropTypes.string.isRequired, 
//     //if a stat is represented by gaint number above one million it displays like string '1M' etc: 1Q is 1 quadrillion
//     followers: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ]).isRequired,
//     views: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ]).isRequired, 
//     likes: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//     ]).isRequired,
// }

export default Profile;
