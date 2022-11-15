import React from 'react';
import { SvgXml } from 'react-native-svg';

interface CroissantsIconProps {
  size?: number;
}

const CroissantsIcon: React.FC<CroissantsIconProps> = ({ size = 20 }) => {
  return <SvgXml xml={xml(size)} />;
};

const xml = (
  size: number
) => `<svg width=${size} height=${size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.8224 27.0975L32.7862 19.9012L19.7099 29.2575L20.1899 34.7137L25.4099 39.7537C25.4099 39.7537 26.1899 43.0537 24.8099 43.9537C23.4299 44.8537 21.4499 45.5737 17.0137 45.3337C12.5737 45.0937 11.1374 43.5937 10.7174 43.1137C10.2974 42.6337 9.63742 40.8937 9.63742 40.8937C9.63742 40.8937 6.11242 40.0875 4.24117 37.4137C2.56117 35.0137 2.86117 32.9137 3.16117 31.8375C3.46117 30.7575 4.24117 30.0975 4.24117 30.0975L4.00117 29.4975C4.00117 29.4975 1.78117 28.4175 1.48117 25.8375C1.18117 23.2575 2.32117 19.4812 4.30117 16.6612C6.28117 13.8412 6.88117 14.1412 6.88117 14.1412C6.88117 14.1412 6.04117 13.6612 6.28117 11.5612C6.52117 9.46122 9.52117 7.00122 12.3974 5.20497C15.2737 3.40872 17.3887 2.43372 19.4887 2.79372C21.5887 3.15372 22.3274 4.28622 22.3274 4.28622C22.3274 4.28622 25.4737 2.20497 29.3099 2.98497C33.1462 3.76497 34.9462 6.40497 35.2462 6.94497C35.5462 7.48497 36.0262 7.36497 36.0262 7.36497C36.0262 7.36497 37.5262 6.94497 39.9862 8.20497C42.4462 9.46497 43.2862 11.985 43.4662 12.705C43.6462 13.425 43.8862 14.745 43.8862 14.745C43.8862 14.745 44.9624 15.48 45.7012 17.145C46.6612 19.305 46.8262 21.765 46.2862 24.285C45.7574 26.76 45.2662 27.525 45.2662 27.525L43.8224 27.0975Z" fill="#F6AF3D"/>
<path d="M9.98997 9.75379C10.7737 10.8 12.0337 9.95629 13.5037 8.77504C14.9737 7.59379 15.8737 6.73129 15.1387 5.91754C14.4037 5.10379 12.525 6.32629 11.5425 7.06129C10.5637 7.79254 9.25497 8.77129 9.98997 9.75379ZM6.76497 31.4138C6.01497 31.4138 5.68872 32.3025 5.68872 33.0975C5.68872 33.8925 5.68872 34.6875 6.52872 34.7325C7.18497 34.77 7.60497 34.3125 7.64997 33.0488C7.69872 31.8788 7.42122 31.4138 6.76497 31.4138Z" fill="#F9E0CA"/>
<path d="M23.3626 37.7775L22.6426 38.0663L18.7988 37.4062L14.8426 37.9275L12.2138 39.0413C11.2988 41.1188 13.4663 45.1387 17.0101 45.33C21.4501 45.57 23.4263 44.85 24.8063 43.95C26.1863 43.05 25.4063 39.75 25.4063 39.75L23.3626 37.7775Z" fill="url(#paint0_radial_42_1342)"/>
<path d="M20.9813 32.3437L23.3325 25.8599L17.9175 17.9512L12.93 15.1012C12.93 15.1012 10.2788 16.7062 9.08252 19.8749C7.65752 23.6512 9.01127 27.9974 9.01127 27.9974L15.5775 28.8524L20.9813 32.3437Z" fill="url(#paint1_radial_42_1342)"/>
<path d="M21.2662 21.87L16.8487 16.74L9.90747 13.35C9.90747 13.35 17.5987 12.0562 21.1612 10.2037C24.7237 8.35125 24.6712 5.1825 24.6712 5.1825L28.605 9.61125L31.0275 15.525L31.6687 21.1537L23.5462 23.7187L21.765 23.3625L21.2662 21.87Z" fill="url(#paint2_radial_42_1342)"/>
<path d="M25.5149 6.15004C25.5149 6.15004 27.6899 5.28754 30.6561 5.84629C34.1774 6.51004 36.9486 8.38879 36.9486 8.38879L38.4674 13.8863L38.0099 18.8738L36.4424 21.4388L31.6686 19.875L30.8849 14.175L28.5336 10.1138L25.5149 6.15004Z" fill="url(#paint3_radial_42_1342)"/>
<path d="M9.30373 33.5587C10.0312 38.1075 12.7875 38.8275 12.7875 38.8275L17.4187 37.4737L20.8387 37.9012L18.9862 30.0637L12.7875 28.0687C12.7875 28.0687 8.44873 28.215 9.30373 33.5587Z" fill="url(#paint4_radial_42_1342)"/>
<path d="M8.92881 16.575C7.14006 15.5925 5.40006 18.525 4.80381 19.5975C4.19256 20.7 3.87756 23.7563 4.84506 24.0488C5.78631 24.3338 6.27006 22.2338 7.13256 21.1088C8.47881 19.35 11.0138 17.7188 8.92881 16.575Z" fill="#F9E0CA"/>
<path d="M36.4125 22.2638L39.8363 24.495L42.0262 22.2975L43.6088 17.8238L43.8862 14.7375C43.8862 14.7375 43.6463 13.4175 43.4663 12.6975C43.2863 11.9775 42.4312 9.48379 39.9862 8.19754C37.9912 7.14754 36.4837 7.25254 36 7.31629L38.4712 13.8825L37.5337 19.2938L36.4125 22.2638Z" fill="url(#paint5_radial_42_1342)"/>
<path d="M45.6976 17.1413C45.0789 15.735 44.1751 14.955 43.8864 14.7488L43.6089 17.8313L42.2176 22.7925L39.9226 24.555L43.8264 27.1013L45.2664 27.5213C45.2664 27.5213 45.7539 26.7563 46.2864 24.2813C46.8226 21.7575 46.6501 19.3013 45.6976 17.1413Z" fill="url(#paint6_radial_42_1342)"/>
<path d="M20.4375 21.21C20.4375 21.21 23.37 22.86 27.1913 19.5863C30.015 17.1638 30.5138 14.7075 30.5138 14.7075C30.5138 14.7075 31.7551 17.2388 34.1851 18.1313C36.6151 19.0238 38.1563 18.1313 38.1563 18.1313C38.1563 18.1313 38.205 20.0663 39.5475 21.2588C40.8863 22.4513 42.03 22.3013 42.03 22.3013C42.03 22.3013 41.5838 24.6825 43.2226 25.6275C44.8613 26.5688 45.7538 26.2725 45.7538 26.2725C45.7538 26.2725 45.06 29.91 42.6788 29.9438C39.105 29.9925 38.8088 25.3275 38.8088 25.3275C38.8088 25.3275 37.815 25.1775 37.1213 24.8813C36.4275 24.585 35.73 24.135 35.73 24.135C35.73 24.135 34.6875 24.5813 33.8438 24.6825C33 24.78 31.86 24.4838 31.86 24.4838C31.86 24.4838 31.3126 26.4675 29.0813 28.2563C26.85 30.045 24.1688 30.54 24.1688 30.54C24.1688 30.54 24.4163 31.4813 23.97 32.625C23.58 33.6188 22.4813 34.6613 22.4813 34.6613C22.4813 34.6613 23.0775 35.0588 23.3738 35.8538C23.67 36.6488 23.67 37.5413 23.67 37.5413C23.67 37.5413 26.22 38.07 26.745 40.2225C27.3413 42.6525 24.6113 44.1413 24.6113 44.1413C24.6113 44.1413 25.7363 41.775 24.5138 39.9713C22.7288 37.3425 18.1125 37.29 18.1125 37.29C18.1125 37.29 18.4613 35.3063 18.0638 33.42C17.6663 31.5338 15.5813 28.8563 15.5813 28.8563C15.5813 28.8563 17.4188 28.26 18.8063 26.0288C20.1938 23.7975 20.4375 21.21 20.4375 21.21Z" fill="#CF7118"/>
<path d="M22.4588 34.5113C22.0988 35.3813 19.4775 29.355 12.6563 29.31C5.83505 29.265 3.48755 31.0463 3.48755 31.0463C3.48755 31.0463 3.69755 30.42 3.7088 30.0788C3.72005 29.7375 3.6788 29.31 3.6788 29.31C3.6788 29.31 5.6663 27.165 10.2863 27.0563C14.6775 26.9513 17.9438 27.8663 20.1863 30.1575C22.4326 32.445 22.6725 33.9975 22.4588 34.5113Z" fill="url(#paint7_radial_42_1342)"/>
<path d="M22.6425 38.07C22.5938 38.895 19.605 37.68 15.48 38.7637C11.355 39.8475 9.96752 41.9325 9.96752 41.9325C9.96752 41.9325 9.71627 41.4675 9.47252 41.1637C9.22877 40.86 8.70752 40.5 8.70752 40.5C8.70752 40.5 10.7063 37.8075 15.045 37.0275C19.3838 36.2475 22.6875 37.3312 22.6425 38.07Z" fill="url(#paint8_radial_42_1342)"/>
<path d="M6.25131 12.7537C6.25131 12.7537 6.32256 13.2862 6.23631 13.8037C6.15006 14.325 5.96631 14.6475 5.96631 14.6475C5.96631 14.6475 11.1376 14.7937 14.5688 17.1825C18.0001 19.5712 20.7751 22.9162 22.0801 25.5225C23.3851 28.1287 23.2951 30.0375 23.9026 29.7787C24.5101 29.52 24.3376 26.3062 22.6876 23.265C21.0376 20.2237 18.1726 16.1887 13.9163 14.4075C9.66006 12.6262 6.25131 12.7537 6.25131 12.7537Z" fill="url(#paint9_radial_42_1342)"/>
<path d="M22.41 4.25623C22.3013 4.54873 26.4788 7.56373 28.4513 11.4037C30.4238 15.2475 30.8325 19.0912 31.0688 20.9962C31.305 22.9012 31.17 24.2625 31.7138 24.1237C32.2575 23.9887 32.3775 22.695 32.5313 19.9762C32.7 16.9162 31.4963 13.05 29.9813 10.35C28.4325 7.59373 25.7738 5.24248 24.03 4.45498C23.265 4.10998 22.5413 3.89623 22.41 4.25623Z" fill="url(#paint10_radial_42_1342)"/>
<path d="M35.4337 7.21502C35.2987 7.37252 37.7249 10.1438 37.5974 14.9063C37.4812 19.3688 35.4899 23.2725 35.8274 23.4075C36.1687 23.5425 36.8474 22.7625 37.7999 20.7563C38.7524 18.75 39.6037 15.6188 39.0599 12.5925C38.6549 10.335 37.5412 8.29877 36.5999 7.61252C36.2812 7.38002 35.6024 7.01627 35.4337 7.21502Z" fill="url(#paint11_radial_42_1342)"/>
<path d="M39.3674 24.975C39.6412 25.4325 42.1049 24.4013 43.2937 21.78C44.4824 19.1625 44.4862 15.4388 43.8149 15.4875C43.4662 15.5138 43.4474 18.3413 41.8499 21.57C40.7999 23.6925 39.2624 24.8063 39.3674 24.975Z" fill="url(#paint12_radial_42_1342)"/>
<defs>
<radialGradient id="paint0_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.7373 36.5966) scale(14.6198 14.6197)">
<stop offset="0.34" stop-color="#E07F16"/>
<stop offset="0.821" stop-color="#E07F16" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint1_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.2965 24.3498) scale(11.7004 11.7004)">
<stop offset="0.254" stop-color="#E07F16"/>
<stop offset="1" stop-color="#E07F16" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8376 8.30925) rotate(54.463) scale(14.2182 32.3789)">
<stop offset="0.243" stop-color="#E07F16" stop-opacity="0"/>
<stop offset="0.924" stop-color="#E07F16"/>
</radialGradient>
<radialGradient id="paint3_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.9588 2.23301) rotate(73.6981) scale(20.0498 26.2562)">
<stop offset="0.31" stop-color="#E07F16" stop-opacity="0"/>
<stop offset="0.6" stop-color="#E07F16"/>
</radialGradient>
<radialGradient id="paint4_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.5315 32.5582) scale(16.3117)">
<stop offset="0.454" stop-color="#E07F16"/>
<stop offset="0.913" stop-color="#E07F16" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.7007 21.6345) scale(14.4127)">
<stop offset="0.585" stop-color="#E07F16"/>
<stop offset="1" stop-color="#E07F16" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint6_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.5566 25.7265) scale(13.2525 13.2525)">
<stop offset="0.098" stop-color="#E07F16"/>
<stop offset="0.759" stop-color="#E07F16" stop-opacity="0.125"/>
<stop offset="0.854" stop-color="#E07F16" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint7_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.9348 30.216) scale(11.4465 11.4465)">
<stop offset="0.353" stop-color="#F8C975"/>
<stop offset="0.508" stop-color="#F9C368"/>
<stop offset="0.794" stop-color="#FCB445"/>
<stop offset="1" stop-color="#FFA828"/>
</radialGradient>
<radialGradient id="paint8_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.05952 41.7375) scale(10.0121)">
<stop offset="0.353" stop-color="#F8C975"/>
<stop offset="0.508" stop-color="#F9C368"/>
<stop offset="0.794" stop-color="#FCB445"/>
<stop offset="1" stop-color="#FFA828"/>
</radialGradient>
<radialGradient id="paint9_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.65568 13.4835) scale(16.7183 16.7183)">
<stop offset="0.221" stop-color="#F8C975"/>
<stop offset="0.535" stop-color="#FBBA53"/>
<stop offset="0.881" stop-color="#FFA828"/>
</radialGradient>
<radialGradient id="paint10_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.0494 3.6746) scale(13.6324)">
<stop offset="0.353" stop-color="#F8C975"/>
<stop offset="0.508" stop-color="#F9C368"/>
<stop offset="0.794" stop-color="#FCB445"/>
<stop offset="1" stop-color="#FFA828"/>
</radialGradient>
<radialGradient id="paint11_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.2743 6.44064) scale(10.2244 10.2244)">
<stop offset="0.353" stop-color="#F8C975"/>
<stop offset="0.508" stop-color="#F9C368"/>
<stop offset="0.794" stop-color="#FCB445"/>
<stop offset="1" stop-color="#FFA828"/>
</radialGradient>
<radialGradient id="paint12_radial_42_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.8727 12.8779) scale(7.332 7.332)">
<stop offset="0.353" stop-color="#F8C975"/>
<stop offset="0.508" stop-color="#F9C368"/>
<stop offset="0.794" stop-color="#FCB445"/>
<stop offset="1" stop-color="#FFA828"/>
</radialGradient>
</defs>
</svg>
`;

export default CroissantsIcon;
