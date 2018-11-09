import React, { Component } from 'react'

const store = createStore(bandReducer);

ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))


export default class BandInput extends React.Component {
  render(){
      return(
          <div>
              <form>
                  <label>Enter Band: </label>
                  <input />
                  <button type="submit">Submit</button>
              </form>
          </div>
      )
  }
}
