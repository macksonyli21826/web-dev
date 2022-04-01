import React from "react";
//import profileReducer from "../reducers/profile-reducer";
import Profile from "../Profile";
import EditProfile from "../Profile/EditProfile";
import {Route,Routes} from "react-router-dom";

const ProfileScreen = () => {

    return(
        <div>
            <Routes>
                <Route path={""} exact element ={<Profile/>}/>
                <Route path={"edit"} element ={<EditProfile/>}/>

            </Routes>
        </div>
    )
}
export default ProfileScreen;