import React, { Component } from 'react'

const store = createStore(bandReducer);
 
ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))


export default class BandInput extends React.Component {
    render(){
        return <div>I LIEK TEH BANDZ</div>
    }
}
