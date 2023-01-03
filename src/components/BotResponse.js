import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/images/logo.png'

const BotResponse = (props) => {
    return (
        <div className="d-flex flex-row justify-content-start mb-4 text-white">
            <img src={Logo} alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div className="card mask-custom">
                <div className="card-header d-flex justify-content-between p-3" style={{borderBottom: "1px solid rgba(255,255,255,.3)"}}>
                    <p className="fw-bold mb-0 me-2">Jerry Bot</p>
                    <p className="text-light small mb-0"><FontAwesomeIcon icon="fa-clock" /> 12 mins ago</p>
                </div>
                <div className="card-body">
                    <p className="small mb-0">{props.botResponse}</p>
                </div>
            </div>
        </div>
    )
}

export default BotResponse