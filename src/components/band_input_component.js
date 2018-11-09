const store = createStore(bandReducer);
 
ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))