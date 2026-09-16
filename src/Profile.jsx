


function Profile() {

const imageUrl = "/.src/logo.svg";

const handleClick = (e) => e.target.style.display = "none";



return (<img onClick={handleClick}  src={imageUrl} alt="Profile" />);

}

export default Profile;

