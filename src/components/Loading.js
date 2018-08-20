import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rightMove } from './keyframes/type'

class TextLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const stopper = `${this.props.text}...`;
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({ text: this.props.text });
      } else {
        this.setState({ text: `${this.state.text}.` });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p {...this.props}>
        {this.state.text}
      </p>
    );
  }
}

TextLoading.propTypes = {
  text: PropTypes.string,
}

TextLoading.defaultProps = {
  text: 'Loading',
  speed: 300,
}

const TopLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 800;
  background: #34e79a;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  animation-duration: 1000ms;
  animation: ${rightMove} 1200ms linear infinite;
`

const Loading = ({ isText, ...props }) => {
  return (
    isText ?
      <TextLoading
        {...props}
      />
      : <TopLoading />
  );
};

Loading.propTypes = {
  isText: PropTypes.bool,
  shape: PropTypes.string,
  style: PropTypes.object,
};

Loading.defaultProps = {
  isText: true,
};

export default Loading
