import profilePicture from "../../../assets/images/pp.jpg";
import "./profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__photo">
        <img src={profilePicture} alt="" />
      </div>
      <div className="profile__description">
        <p id="name">Emine,</p>
        <p id="text">Let's plan your task!</p>
      </div>
    </div>
  );
};
export default Profile;
