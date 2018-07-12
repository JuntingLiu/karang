import React from 'react';
import { func, PropTypes } from 'prop-types';
import styled from 'styled-components';

import noop from 'utils/noop';

import { small, large } from '../ratingBarSizes';
import StarIcon from 'icons/StarIcon';

const StarStyle = styled.span`
  display: inline-block;
  padding: ${({ size }) => (size === large ? '0px 5px' : '0px 1px')};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
  &:first-of-type {
    padding-left: 0px;
  }
  &:last-of-type {
    padding-right: 0px;
  }
`;

const Star = ({ onClick, onMouseEnter, onMouseLeave, color, size, id }) => (
  <StarStyle
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    size={size}
    id={id}
  >
    <StarIcon color={color} size={size} />
  </StarStyle>
);

Star.propTypes = {
  size: PropTypes.oneOf([small, large]),
  color: PropTypes.string.isRequired, // .isRequired?
  id: PropTypes.number.isRequired, // .isRequired?
  onClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
};

Star.defaultProps = {
  size: small,
  onClick: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
};

export default Star;
