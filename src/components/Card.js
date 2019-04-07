import React from 'react';
import PropTypes from 'prop-types';
import {color} from "src/styles";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.state={
            width:0
        }
    }
    componentDidMount(){
        this.setState({width:this.container.current.offsetWidth})
    }
    render() {
        const style = {
            container : {
                display:"flex",
                flexDirection:"column",
                width:this.props.width,
            },
            label : {
                padding:"10px",
                fontSize:"30px",
                color:"white",
                borderRadius: "3px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                backgroundColor:color.secondaryDark,
                zIndex:"100",
                position:"relative",
                top:"15px",
                left:"20px",
                width:this.state.width*0.7+"px",
            },
            content : {
                padding:"20px 10px 10px 10px",
                color:"white",
                borderRadius: "3px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                backgroundColor:color.secondary,
                zIndex:"99",
                width:this.state.width+"px",
            }
        }
        return (
            <div ref={this.container} style={style.container}>
                <div style={style.label}>
                    {this.props.label}
                </div>
                <div style={style.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Card.defaultProps = {
    width: '300px',
    label: 'Label'
};
Card.propTypes = {
    width: PropTypes.string,
    label: PropTypes.string
};