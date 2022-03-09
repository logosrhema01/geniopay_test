import * as React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon as MuiSvgIcon, styled } from '@mui/material';

const SvgIcon = styled(MuiSvgIcon, {
  name: 'WalletIcon',
  shouldForwardProp: (prop) => prop !== 'fill'
})(() => ({
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '1px'
}));

SvgIcon.defaultProps = {
  viewBox: '0 0 30 30',
  focusable: 'false',
  'aria-hidden': 'true'
};

Wallet.propTypes = {
  fillColor: PropTypes.object,
  strokeColor: PropTypes.object
};

function Wallet(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3V5ZM5.50001 5L20 5V3L5.50001 3L5.50001 5ZM5.50001 10H13.5V8L5.50001 8V10ZM4.00001 6.5C4.00001 5.67157 4.67158 5 5.50001 5L5.50001 3C3.56701 3 2.00001 4.567 2.00001 6.5L4.00001 6.5ZM2.00001 6.5C2.00001 8.433 3.56701 10 5.50001 10V8C4.67158 8 4.00001 7.32843 4.00001 6.5L2.00001 6.5Z"
        fill={props?.fillColor}
        stroke={props?.strokeColor}
      />
      <path d="M4 12L4 6.5H2L2 12H4Z" fill={props?.fillColor} stroke={props?.strokeColor} />
      <path
        d="M3 8.5H2.5V9L2.5 19V19.0329C2.49998 19.4762 2.49995 19.8581 2.54107 20.1639C2.58514 20.4917 2.68451 20.8058 2.93934 21.0607L2.93934 21.0607C3.19417 21.3155 3.50835 21.4149 3.83611 21.4589C4.14193 21.5 4.52384 21.5 4.96708 21.5L5 21.5L19 21.5C19.011 21.5 19.022 21.5 19.0329 21.5C19.4762 21.5 19.8581 21.5 20.1639 21.4589C20.4917 21.4149 20.8058 21.3155 21.0607 21.0607C21.3155 20.8058 21.4149 20.4917 21.4589 20.1639C21.5 19.8581 21.5 19.4762 21.5 19.0329C21.5 19.022 21.5 19.011 21.5 19V18V17.5H21H18C16.6193 17.5 15.5 16.3807 15.5 15C15.5 13.6193 16.6193 12.5 18 12.5H21H21.5V12V11L21.5 10.9671C21.5 10.5238 21.5 10.1419 21.4589 9.8361C21.4149 9.50835 21.3155 9.19417 21.0607 8.93934C20.8058 8.68451 20.4917 8.58514 20.1639 8.54107C19.8581 8.49995 19.4762 8.49997 19.0329 8.5L19 8.5L3 8.5Z"
        fill={props?.fillColor}
        stroke={props?.strokeColor}
      />
    </SvgIcon>
  );
}

export { Wallet };
