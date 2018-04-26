import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoIcon extends Component {
  static defaultProps = {
    size: 32,
  };

  static propTypes = {
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    let { dark, height, width, size } = this.props;
    return (
      <svg className={cx({"text-brand": !dark }, { "text-white": dark })} fill="currentcolor" width={width || size} height={height || size} viewBox="0 0 324.86 324.86">
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Layer_2-2" data-name="Layer 2">
            <g id="Layer_1-2-2" data-name="Layer 1-2">
              <g>
                <path d="M229.61,14.69"/>
                <path d="M285.21,56.29"/>
                <path d="M252.71,42.69c-22.7,0-37.3,9.4-43.7,14.3s-34.3,34.5-46.1,76.8c-.4,1.4-.9,3-1.3,4.8H323a161.21,161.21,0,0,0-37.8-82.2A46.22,46.22,0,0,0,252.71,42.69Z"/>
                <path d="M49.71,270.09c5.2-19,16.9-61.2,28.4-99.4H37l8.6-32.2h42.5c4.1-12.6,7.9-23.5,11.1-31.2,7.2-17.5,32-51.2,50.3-64.4,14-10.1,37.9-28.7,80.1-28.3a162.4,162.4,0,0,0-182,262.7C48.71,273.59,49.51,270.79,49.71,270.09Z"/>
                <path d="M152.91,170.69c-10.6,40.3-25.6,98.2-35.7,137.6-.2,1-1.1,4.7-2.2,9.5,85.8,26.1,176.6-22.3,202.7-108.1a165.25,165.25,0,0,0,6.8-38.9Z"/>
              </g>
            </g>
          </g>
        </g>
        </g>
      </svg>
    );
  }
}
