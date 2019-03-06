import React from 'react';
import { node, bool, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import {
  mineShaft,
  mountainMeadow,
  nobel,
  pictonBlue,
  primary,
  secondary,
  treePoppy,
  valencia,
  white,
} from 'styles/colors';
import { fontSize } from 'styles/fonts';

const colorsMap = {
  default: mineShaft['800'],
  mineShaft: mineShaft.main,
  mountainMeadow: mountainMeadow.main,
  nobel: nobel.main,
  pictonBlue: pictonBlue.main,
  pictonBlueDark: pictonBlue['800'],
  primary: primary.main,
  secondary: secondary.main,
  treePoppy: treePoppy.main,
  valencia: valencia.main,
};

const StyledPill = styled.span.attrs({
  title: props => props.children,
})`
  padding: 0.4em 0.4em;
  display: inline-block;
  font-size: ${({ size }) =>
    size === 'small' ? fontSize.small : fontSize.base};
  font-weight: bold;
  line-height: 1;
  text-align: center;
  border: 1px solid;
  border-radius: 1em;
  border-color: ${({ color }) => colorsMap[color] || colorsMap.default};
  ${({ solid }) =>
    solid
      ? css`
          background-color: ${({ color }) =>
            colorsMap[color] || colorsMap.default};
          color: ${white};
        `
      : css`
          color: ${({ color }) => colorsMap[color] || colorsMap.default};
        `};
`;

/**
 * Pill component is label with a background color for displaying numerical value.
 */
const Pill = ({ color, children, ...rest }) => (
  <StyledPill {...rest} color={color}>
    {children}
  </StyledPill>
);

Pill.propTypes = {
  /** Text in the Pill component */
  children: node.isRequired,
  /** Color of Pill component */
  color: oneOf([
    'default',
    'mineShaft',
    'mountainMeadow',
    'nobel',
    'pictonBlue',
    'pictonBlueDark',
    'primary',
    'secondary',
    'treePoppy',
    'valencia',
  ]),
  /** Size of Pill component */
  size: oneOf(['small', 'default']),
  /** `true` for showing as solid background color */
  solid: bool,
};

Pill.defaultProps = {
  color: 'default',
  size: 'default',
  solid: false,
};

export default Pill;
