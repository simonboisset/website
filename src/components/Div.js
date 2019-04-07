import React from 'react';
import PropTypes from 'prop-types';


export default class Div extends React.Component {
  render() {
    const style = {
        display:"flex",
        alignItems:"flex-end",
        width:this.props.width
    }
    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}
Div.defaultProps = {
    width: 'auto'
};
Div.propTypes = {
    width: PropTypes.string
};