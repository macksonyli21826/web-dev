import React from "react";
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import profilePicture from "../../../images/profilePicture.png";
import bannerPicture from "../../../images/bannerPicture.png";
const Profile = ({editProfile}) => {
    const profile = useSelector(state=>state.profile);

    return(
        <div>
            <div className="row">
                <div className="col-1 mt-2">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <div className="wd-bold mb-0">
                        {profile.firstName} {profile.lastName}
                    </div>
                    <div className="wd-darkgrey mt-0 wd-sm-font">
                        5,123 Tweets
                    </div>
                </div>
            </div>
            <div className = "mt-2 mb-2">
                <img src = {bannerPicture} className="wd-width-100" alt = "bannerPicture" />
            </div>
            <div className="row">
                <div className="col-10">
                    <img className = "wd-profilepic position-relative bottom-50 ms-3" src = {profilePicture} alt = "profilePicture"/>
                </div>

                <div className= "col-2">
                        <Link to = "/tuiter/profile/edit" className="btn btn-outline-dark rounded-pill position-relative end-100 wd-bold">
                             EditProfile
                        </Link>
                </div>
            </div>
            <div className = "mt-0 ms-3">
                <div className = "wd-bold">
                    {profile.firstName} {profile.lastName}
                </div>
                <div className = "wd-sm-font wd-darkgrey">
                    @{profile.handle}
                </div>
                <div className="mt-2">
                    {profile.bio}
                </div>
                <div className="wd-flex wd-darkgrey mt-2">
                    <div className = "me-3">
                        <i className = "fa fa-map-marker-alt me-2"></i>
                        {profile.location}
                    </div>
                    <div className = "me-3">
                        <i className = "fa fa-map-pin me-2"></i>
                        Born {profile.dateOfBirth}
                    </div>
                    <div className = "me-3">
                        <i className = "fa fa-calendar-alt me-2"></i>
                        Joined April 2009
                    </div>
                </div>
                <div className = "wd-flex mt-2">
                    <div className = "me-1 wd-bold">
                        {profile.followingCount}
                    </div>
                    <div className = "me-3 wd-darkgrey">
                        Following
                    </div>
                    <div className = "me-1 wd-bold">
                        {profile.followersCount}
                    </div>
                    <div className = "me-3 wd-darkgrey">
                        Followers
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile;