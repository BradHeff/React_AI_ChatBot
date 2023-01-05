import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserChat from './UserChat';
import BotResponse from './BotResponse';

var model = {};

class Functions extends Component {
    constructor() {
        super();
        this.state = {            
            sent: false,
            progress: 0,
            switch: false,
            loading: true
        }        
    }
    
    async query(data) {
        // console.log(data)
        const response = await fetch(
            process.env.REACT_APP_ENDPOINT,
            {
                headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    
    
    Chat = (e) => {
        e.preventDefault()
        model = this.props.model
        model['user'].push(this.props.response)
        var error = false;
        const txt = this.props.response
        const box = document.getElementById("inputBox");
        box.value = ""
        this.query({inputs: txt, parameters: {temperature: 0.8, top_k: 50, top_p: 0.85, do_sample:true}, options: {wait_for_model: this.state.loading}}).then((res) => {
            // console.log(res)
            if(JSON.stringify(res).includes("error")){error = true}else{error=false}

            model['bot'].push(`${error?"AI Model needs to re-load, please try again in 30seconds":res.generated_text}`)
            try{
                this.props.onGetModel(model)
            }catch{}
            
            if(error){
                this.LoadModel();
            }
            this.setState(prevState => ({
                switch: !prevState.switch,
                sent: true
            }));
            
            return true
        });        
    }
    LoadModel = () => {
        const box = document.getElementById("inputBox");
        var x = setInterval(() => {
            if(this.state.progress >= 98) {
                clearInterval(x);
                this.setState({progress: 0})
                box.ariaReadOnly = false
            }else{
                this.setState(prevState => ({
                    progress: prevState.progress + 3.125
                }))
            }
        }, 1000);
    }

    componentDidUpdate() {
        var scr = document.getElementById("chatwindow")
        scr.scrollTo(0,scr.scrollHeight)
    }
    componentDidMount() {
        const btn = document.getElementById("submitBtn");
        const box = document.getElementById("inputBox");
        box.addEventListener("keypress", function onEvent(event) {
            if (event.key === "Enter" && !this.state.switch) {
                btn.click();
                // console.log("CLICKED!!!");
                this.setState(prevState => ({
                    switch: !prevState.switch
                }));
            }
        }.bind(this));
    }
    render() {
        return (
            <div className="card-body px-0">
                <div id="chatwindow" className='px-2 px-xl-5 chatwindow'>
                {this.props.model["user"].map((items, x) => {
                    if (this.state.sent) {
                        // console.log(this.props.model["user"][x])
                        // console.log(x)
                        return (<div key={x}>
                            <UserChat input={this.props.model['user'][x]}/>
                            <BotResponse botResponse={this.props.model['bot'][x]}/>
                        </div>)
                    }
                    return true
                })}
                </div>
                <div className="card-footer text-muted p-3 w-100" style={{backgroundColor: 'transparent'}}>
                    <div className="progress mb-2" style={{height: "6px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${this.state.progress}%`}} role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>  
                    <div className='d-flex align-items-center justify-content-space'>
                        <div className='d-flex align-items-center justify-content-start w-100'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
                            <input type="text" className="form-control form-control-lg mx-1" style={{borderColor: "none", boxShadow: 'none'}} id="inputBox" placeholder="Type message" onChange={(e)=>this.props.onBotResponse(e.target.value)}/>
                        </div>
                        <div className='d-flex align-items-center justify-content-center' style={{width: "50px"}}>
                            <button id="submitBtn" type="submit" className="chatbtn border-0 text-primary" style={{backgroundColor: 'transparent'}} onClick={(e) => this.Chat(e)}><FontAwesomeIcon icon="fa-paper-plane" /></button>
                        </div>
                    </div>
            </div>
            </div>
            
        );
    }
}

export default Functions;