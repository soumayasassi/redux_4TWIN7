import {useSelector} from "react-redux"
function Profile() {
  
  const data = useSelector((data)=>data.user.value)
    return (
        <>
        <h1> Display data in the profile component</h1>
<p>{data.email}</p>
<p>{data.nom}</p>
        </>
      );
}

export default Profile;