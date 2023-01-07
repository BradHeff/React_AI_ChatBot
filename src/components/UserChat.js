import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';

const UserChat = (props) => {
    const getTime = () => {
        return moment(props.time).fromNow();
    }
    return (
        <div className="d-flex flex-row justify-content-end mb-4 text-white">
            <div className="card mask-custom">
                <div className="card-header d-flex justify-content-between p-3" style={{borderBottom: "1px solid rgba(255,255,255,.3)"}}>
                    <p className="fw-bold mb-0 me-2">Guest User</p>
                    <p className="text-light small mb-0"><FontAwesomeIcon icon="fa-clock" /> {getTime()}</p>
                </div>
                <div className="card-body">
                    <p className="small mb-0">{props.input}</p>
                </div>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60"/>
        </div>
    )
}

export default UserChat