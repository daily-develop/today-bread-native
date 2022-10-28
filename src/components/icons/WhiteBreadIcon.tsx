import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface WhiteBreadIconProps {
  size?: number;
}

const WhiteBreadIcon: React.FC<WhiteBreadIconProps> = ({ size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path
        d="M4.76621 21.2288C4.76621 21.2288 4.49996 30.7838 4.49996 32.1038C4.49996 33.4238 4.38371 34.7813 5.42996 35.595C6.06371 36.09 8.98496 38.2875 12.8812 40.485C16.7775 42.6825 21.9825 45.2963 23.0512 45.735C24.12 46.1738 25.3425 45.93 26.715 45.42C27.9712 44.955 30.78 43.5338 34.8637 41.46C38.9475 39.3863 40.8262 38.34 41.9662 37.4363C42.8287 36.7538 43.6612 35.865 43.5375 34.2938C43.41 32.7225 43.4475 29.1525 43.3237 27.645C43.1962 26.1375 43.0987 20.6213 43.0987 20.6213L46.4587 14.4525C46.4587 14.4525 46.3762 13.1663 46.0837 12.3713C45.6487 11.1863 44.8425 10.5488 44.8425 10.5488L18.3412 5.90253C18.3412 5.90253 4.81496 9.09753 4.06496 9.53253C3.31496 9.96753 1.36871 11.5838 1.42121 14.4638C1.49996 18.6 4.76621 21.2288 4.76621 21.2288Z"
        fill="#E07F14"
      />
      <Path
        d="M6.52115 20.6587C6.52115 20.6587 6.0224 31.665 6.28865 33.2512C6.5099 34.5787 10.5637 36.945 13.5187 38.6325C16.1812 40.155 21.8249 42.5437 22.5974 42.9112C23.3699 43.2787 23.7374 42.585 23.7374 41.9737C23.7374 41.3625 23.7787 28.14 23.7787 28.14C23.7787 28.14 27.2137 27.5287 27.8624 24.4762C28.5112 21.4237 25.0237 16.5937 15.6787 12.9637C6.03366 9.22497 3.20615 11.3962 3.09365 14.0887C2.9324 18.0787 6.52115 20.6587 6.52115 20.6587Z"
        fill="#FFEBCA"
      />
      <Path
        d="M30.5474 21.4237C30.5474 21.4237 31.6349 25.2525 29.6287 27.3712C27.5962 29.5162 25.8862 29.895 25.8862 29.895C25.8862 29.895 25.7474 31.6237 25.8299 31.8262C26.0212 32.3025 32.0287 29.8537 35.8124 28.2675L43.1774 25.1775C43.1774 25.1775 43.0537 23.3062 43.1774 23.3475C43.3012 23.3887 45.2512 21.4762 45.9449 18.9937C46.6349 16.5112 46.4624 14.4637 46.4624 14.4637C46.4624 14.4637 40.2262 17.0662 38.0549 18.0562C35.9774 19.0012 31.4924 20.9062 30.5474 21.4237Z"
        fill="#AC5811"
      />
      <Path
        d="M28.8526 18.2888C29.1001 18.5588 45.5814 11.3813 45.5814 11.3813C45.5814 11.3813 39.9676 2.55003 25.8489 2.31003C11.4076 2.06253 3.23262 9.85878 3.06012 10.3313C2.92512 10.6988 5.67012 7.11003 14.8651 10.08C24.0601 13.05 27.4951 16.8188 28.8526 18.2888Z"
        fill="#F5B03E"
      />
    </Svg>
  );
};

export default WhiteBreadIcon;
