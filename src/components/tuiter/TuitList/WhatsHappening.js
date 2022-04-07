import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-action";
import profilePicture from "../../../images/profilePicture.png";

const WhatsHappening = () => {
    //let [whatsHappening, setWhatsHappening]
    //  = useState('');
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();
    //const tuitClickHandler = () => {
    //  dispatch({type: 'create-tuit',
    //    tuit: whatsHappening
    //    })
    //}
    return (
        <div className = "wd-flex">
            <div>
                <div>
                    <img className = "wd-avatar-1 me-3" src = {profilePicture} alt = "avatar"/>
                </div>
            </div>
            <div className = "wd-width-100">
                <textarea
                    className="form-control-plaintext mb-3"
                    placeholder="What's happening?"

                    onChange={(e) =>
                    setNewTuit({...newTuit,
                        tuit: e.target.value})}
                >
                </textarea>

                <div className = "wd-flex wd-space-between wd-border-top">
                    <div className = "mt-3">
                        <i className= "wd-tuiter-blue fa fa-file me-3"></i>
                        <i className= "wd-tuiter-blue fa fa-bars me-3"></i>
                        <i className= "wd-tuiter-blue fa fa-smile me-3"></i>
                        <i className= "wd-tuiter-blue fa fa-calendar-alt me-3"></i>
                    </div>
                    <button className = "btn btn-primary btn-block rounded-pill mt-3 mb-3"
                            onClick = {()=>
                                createTuit(dispatch, newTuit)}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;