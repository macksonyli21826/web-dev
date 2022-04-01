import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        })
    }
    return (
        <div className = "wd-flex">
            <div>
                <div>
                    <img className = "wd-avatar-1 me-3" src = "../../../../public/images/js.png" alt = "avatar"/>
                </div>
            </div>
            <div className = "wd-width-100">
                <textarea
                    className="form-control wd-bg-black mb-3"
                    placeholder="What's happening?"
                    value={whatsHappening}
                    onChange={(event) => setWhatsHappening(event.target.value)}
                >
                </textarea>

                <div className = "wd-flex wd-space-between wd-border-top">
                    <div className = "mt-3">
                        <i className= "wd-tuiter-blue fa fa-file me-3"></i>
                        <i className= "wd-tuiter-blue fa fa-bars me-3"></i>
                        <i className= "wd-tuiter-blue fa fa-smile me-3"></i>
                        <i className= "wd-tuiter-blue fa fa-calendar-alt me-3"></i>
                    </div>
                    <button className = "btn btn-primary btn-block rounded-pill mt-3 mb-3" onClick={tuitClickHandler}>
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;