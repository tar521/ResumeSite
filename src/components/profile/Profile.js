import {Typography} from "@material-ui/core"
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
            <Typography className='name'>TRIS</Typography>
            <Typography className='title'>REED</Typography>
            </div>

            <figure className='profile_image'>
                <img src="" alt=""/>
            </figure>

            <div className='profile_information'>
                Insert Timeline
                <br/>
                <button>Some Button</button>
            </div>
        </div>
    )
}

export default Profile