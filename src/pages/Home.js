import React from 'react';
import {storage} from 'src/functions';
import {Card} from 'src/components';
import me from 'src/assets/me.jpg';
const style = {
  width:"250px",
  borderRadius: "3px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  position:"absolute",
  top:"25px",
  right:"25px"
}
class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      name:storage.state.name?storage.state.name:"John"
    }
  }
  render() {
    return (
      <div>
        <img style={style} src={me} alt="Me"  />
        <Card>content</Card>
        <Card>content</Card>
        stack
        github
        mes projets
      </div>
    );
  }
}
export default Home;
