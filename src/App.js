import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import {Header} from "src/containers";
import {Home,Page404} from "src/pages";
import {storage} from 'src/functions';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      height:window.innerHeight
    }
  }
  componentDidMount() {
    // Force update when states change
    storage.sync(this);
    window.addEventListener("resize", ()=>this.setState({height:window.innerHeight}));
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{minHeight:this.state.height}}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
