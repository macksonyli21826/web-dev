import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import profilePicture from "../../../images/profilePicture.png";
import bannerPicture from "../../../images/bannerPicture.png";

const EditProfile = () => {
    const dispatch = useDispatch();
    const profile  = useSelector(state=>state.profile)
    const history = useNavigate();

    const [currentProfile, setCurrentProfile] =useState({...profile})

    const handleChange = (name, event)=>{
        const {value} = event.target
       setCurrentProfile({...currentProfile,[name]:value })

    }
    const saveClickHandler =() => {

        dispatch({type: 'save-profile', data: currentProfile})
      history("/tuiter/profile")
    }
    return(
        <div>

            <div className="row mt-2 mb-2">
                <div className="col-1 mt-1">
                    <Link to = "/tuiter/profile" className = "wd-white">
                        <i className="fa fa-window-close"></i>
                    </Link>

                </div>
                <div className="col-9 mt-1">
                    <div className="wd-bold">
                        Edit Profile
                    </div>
                </div>
                <div className="col-2">
                    <div className="wd-bold">
                        <button className={"btn btn-dark wd-bold rounded-pill"} onClick={saveClickHandler}>Save</button>
                    </div>
                </div>
            </div>
            <div className = "mt-2 mb-2">
                <img src = {bannerPicture} className="wd-width-100" alt = "bannerPicture" />
            </div>
            <div>
                <img className = "wd-profilepic position-relative bottom-50 ms-3" src = {profilePicture} alt = "profilePicture"/>
            </div>
            <div className = "wd-edit-border mt-3">
                <div className="ms-2 wd-darkgrey form-control-sm">
                    First name
                </div>
                <input
                    className="form-control-plaintext ms-3 wd-width-80"
                    value ={currentProfile.firstName}
                    onChange={handleChange.bind({}, "firstName")}>
                </input>
            </div>
            <div className = "wd-edit-border mt-3">
                <div className="ms-2 wd-darkgrey form-control-sm">
                   Last name
                </div>
                <input
                    className="form-control-plaintext ms-3 wd-width-80"
                    value ={currentProfile.lastName} onChange={handleChange.bind({}, "lastName")}>
                </input>
            </div>
            <div className = "wd-edit-border mt-4">
                <div className="ms-2 wd-darkgrey form-control-sm">
                    Bio
                </div>
                <textarea
                    className="form-control-plaintext ms-3 wd-width-80"
                    value = {currentProfile.bio} onChange={handleChange.bind({}, "bio")}>
                </textarea>
            </div>
            <div className = "wd-edit-border mt-4">
                <div className="ms-2 wd-darkgrey form-control-sm">
                    Location
                </div>
                <input
                    className="form-control-plaintext ms-3 wd-width-80"
                    value = {currentProfile.location} onChange={handleChange.bind({}, "location")}>
                </input>
            </div>
            <div className = "wd-edit-border mt-4">
                <div className="ms-2 wd-darkgrey form-control-sm">
                    Website
                </div>
                <input
                    className="form-control-plaintext ms-3 wd-width-80"
                    value = {currentProfile.website} onChange={handleChange.bind({}, "website")}>
                </input>
            </div>
            <div className = "wd-edit-border mt-4">
                <div className="ms-2 wd-darkgrey form-control-sm">
                    Date of birth
                </div>
                <input
                    className="form-control-plaintext ms-3 wd-width-80"
                    value = {currentProfile.dateOfBirth} onChange={handleChange.bind({}, "dateOfBirth")}>
                </input>
            </div>

        </div>
    )
}
export default EditProfile;