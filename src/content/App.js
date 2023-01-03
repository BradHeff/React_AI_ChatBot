import React, { Component } from 'react';

import { getModel, botResponse } from '../reducer/action';
import { connect } from 'react-redux';

import Functions from '../components/Functions';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas);
const mapStateToProps = state => {
   return {
      model: state.baseReducer.model,
      response: state.baseReducer.response,
   }
}

const mapDispatchToProps = (dispatch) => {
   return { 
      onGetModel: (link) => dispatch(getModel(link)),
      onBotResponse: (link) => dispatch(botResponse(link)),
   }
}

class App extends Component {
  constructor() {
    super();
    this.state = {}

  }
  
  render() {
     return (
      <section className='mainWindow'>
        <div className="container-xl py-5">      
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-xl-10">      
              <div className="card gradient-custom chatwindow_main" id="chat1" style={{borderRadius: "15px"}}>
                <div
                  className="card-header d-flex justify-content-between align-items-center p-3 text-white border-bottom-0 gradient-title"
                  style={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px"}}>
                  <FontAwesomeIcon icon="fa-angle-left" />
                  <p className="mb-0 fw-bold">Jerry AI Chat</p>
                  <FontAwesomeIcon icon="fa-times" />
                </div>
                  <Functions 
                    onBotResponse={this.props.onBotResponse}
                    response={this.props.response}
                    onGetModel={this.props.onGetModel}
                    model={this.props.model}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
     );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);