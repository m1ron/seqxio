
import type { ReactElement } from "react";
import React from "react";

interface LoginCardProps {
  icon: string;
  className?: string;
  fill?: string;
  iconClass?: string;
  pathClassName?: string;
  onClick?: () => void;
}

const Icons: React.FC<LoginCardProps> = ({
  icon,
  className,
  pathClassName,
}) => {
  const iconList = {
    security: (
      <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.88184 10.8335L9.46538 13.4165L14.6318 8.25" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.7566 23.75L11.8931 23.259C14.2759 22.2364 16.3336 20.5814 17.8432 18.4731C19.3528 16.3649 20.2567 13.8838 20.4571 11.2985L21.0127 4.16854C21.0217 3.87326 20.9291 3.58383 20.7504 3.34864C20.5716 3.11345 20.3175 2.94677 20.0306 2.87646L10.7566 0.5L1.48267 2.825C1.19585 2.89528 0.941838 3.06188 0.763088 3.29694C0.584338 3.532 0.491676 3.82129 0.500588 4.11646L1.05611 11.2465C1.25642 13.8318 2.16033 16.313 3.66992 18.4214C5.17951 20.5298 7.23722 22.1849 9.62017 23.2075L10.7566 23.75Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),

    tasks: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4_497)">
          <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H13.353C14.988 2 15.8055 2 16.5405 2.30448C17.2756 2.60896 17.8537 3.18702 19.0098 4.34315L21.6569 6.99019C22.813 8.14631 23.391 8.72437 23.6955 9.45945C24 10.1945 24 11.012 24 12.647V16C24 19.7712 24 21.6569 22.8284 22.8284C21.6569 24 19.7712 24 16 24H10C6.22876 24 4.34315 24 3.17157 22.8284C2 21.6569 2 19.7712 2 16V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15.4445 2.61108V8.55553C15.4445 9.6601 16.3399 10.5555 17.4445 10.5555H23.3889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9.33337 19.1111H16.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9.33337 14.2222H16.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9.33337 9.33331H10.5556" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_4_497">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    calendar: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3.17645" width="21.1765" height="18.8235" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M2 9.05884H23.1765" stroke="currentColor" strokeWidth="2" />
        <path d="M7.88232 2V4.35294" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17.2941 2V4.35294" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17.8824" cy="14.353" r="1.76471" fill="currentColor" />
      </svg>

    ),

    analytics: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4_517)">
          <path d="M14.5 16.5L14.5 9.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5 16.5L20.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 16.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 16.5V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 21H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4_517">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),

    reports: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4_526)">
          <path d="M8.57143 17.3333V15M12 17.3333V12.6667M15.4286 17.3333V10.3333M17.7143 22H6.28571C5.67951 22 5.09812 21.7542 4.66947 21.3166C4.24082 20.879 4 20.2855 4 19.6667V3.33333C4 2.71449 4.24082 2.121 4.66947 1.68342C5.09812 1.24583 5.67951 1 6.28571 1H12.6697C12.9728 1.00007 13.2634 1.12303 13.4777 1.34183L19.6651 7.65817C19.8795 7.87691 19.9999 8.17361 20 8.483V19.6667C20 20.2855 19.7592 20.879 19.3305 21.3166C18.9019 21.7542 18.3205 22 17.7143 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4_526">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),

    team: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4_530)">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4_530">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    setting: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9 4.69029C11.3567 2.43657 14.5776 2.43657 15.0343 4.69029C15.4121 6.5546 17.3378 7.66642 19.1413 7.06145C21.3214 6.33012 22.9319 9.11953 21.2085 10.6419C19.7828 11.9013 19.7828 14.1249 21.2085 15.3842C22.9319 16.9066 21.3214 19.696 19.1413 18.9647C17.3378 18.3597 15.4121 19.4716 15.0343 21.3359C14.5776 23.5896 11.3567 23.5896 10.9 21.3359C10.5221 19.4716 8.59642 18.3597 6.79298 18.9647C4.61285 19.696 3.00238 16.9066 4.7258 15.3842C6.15144 14.1249 6.15144 11.9013 4.7258 10.6419C3.00238 9.11953 4.61285 6.33012 6.79298 7.06145C8.59642 7.66642 10.5221 6.5546 10.9 4.69029Z" stroke="currentColor" strokeWidth="2.39013" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="13" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
    help: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.46882 9.37506C9.71372 8.67888 10.1971 8.09184 10.8334 7.71791C11.4696 7.34398 12.2177 7.20729 12.945 7.33205C13.6724 7.45682 14.3322 7.83498 14.8074 8.39957C15.2827 8.96416 15.5428 9.67873 15.5417 10.4167C15.5417 12.5001 12.4167 13.5417 12.4167 13.5417M12.5 17.7084H12.5105M22.9167 12.5C22.9167 18.253 18.253 22.9167 12.5 22.9167C6.74707 22.9167 2.08337 18.253 2.08337 12.5C2.08337 6.74707 6.74707 2.08337 12.5 2.08337C18.253 2.08337 22.9167 6.74707 22.9167 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),

    logout: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 17L19.5858 13.4142C20.3668 12.6332 20.3668 11.3668 19.5858 10.5858L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21C5.79086 21 4 19.2091 4 17L4 7C4 4.79086 5.79086 3 8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

    ),
    download: (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 16.6667L5.86283 14.233H2.43363V10.8038L0 8.33333L2.43363 5.86283V2.43363H5.86283L8.33333 0L10.8038 2.43363H14.233V5.86283L16.6667 8.33333L14.233 10.8038V14.233H10.8038L8.33333 16.6667ZM8.33333 14.6018L10.177 12.7581H12.7581V10.177L14.6018 8.33333L12.7581 6.48968V3.90855H10.177L8.33333 2.0649L6.48968 3.90855H3.90855V6.48968L2.0649 8.33333L3.90855 10.177V12.7581H6.48968L8.33333 14.6018ZM6.17625 11.4676L8.33333 10.1586L10.4904 11.4676L9.91888 9.01549L11.8363 7.35619L9.31047 7.15339L8.33333 4.83038L7.35619 7.15339L4.83038 7.35619L6.74779 9.01549L6.17625 11.4676Z" fill="#155234" />
      </svg>
    ),

    activedashboard: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8889 6.94444V1.38889C13.8889 0.99537 14.0222 0.665278 14.2889 0.398611C14.5546 0.13287 14.8843 0 15.2778 0H23.6111C24.0046 0 24.3343 0.13287 24.6 0.398611C24.8667 0.665278 25 0.99537 25 1.38889V6.94444C25 7.33796 24.8667 7.66759 24.6 7.93333C24.3343 8.2 24.0046 8.33333 23.6111 8.33333H15.2778C14.8843 8.33333 14.5546 8.2 14.2889 7.93333C14.0222 7.66759 13.8889 7.33796 13.8889 6.94444ZM0 12.5V1.38889C0 0.99537 0.133333 0.665278 0.4 0.398611C0.665741 0.13287 0.99537 0 1.38889 0H9.72222C10.1157 0 10.4458 0.13287 10.7125 0.398611C10.9782 0.665278 11.1111 0.99537 11.1111 1.38889V12.5C11.1111 12.8935 10.9782 13.2231 10.7125 13.4889C10.4458 13.7556 10.1157 13.8889 9.72222 13.8889H1.38889C0.99537 13.8889 0.665741 13.7556 0.4 13.4889C0.133333 13.2231 0 12.8935 0 12.5ZM13.8889 23.6111V12.5C13.8889 12.1065 14.0222 11.7764 14.2889 11.5097C14.5546 11.244 14.8843 11.1111 15.2778 11.1111H23.6111C24.0046 11.1111 24.3343 11.244 24.6 11.5097C24.8667 11.7764 25 12.1065 25 12.5V23.6111C25 24.0046 24.8667 24.3343 24.6 24.6C24.3343 24.8667 24.0046 25 23.6111 25H15.2778C14.8843 25 14.5546 24.8667 14.2889 24.6C14.0222 24.3343 13.8889 24.0046 13.8889 23.6111ZM0 23.6111V18.0556C0 17.662 0.133333 17.3319 0.4 17.0653C0.665741 16.7995 0.99537 16.6667 1.38889 16.6667H9.72222C10.1157 16.6667 10.4458 16.7995 10.7125 17.0653C10.9782 17.3319 11.1111 17.662 11.1111 18.0556V23.6111C11.1111 24.0046 10.9782 24.3343 10.7125 24.6C10.4458 24.8667 10.1157 25 9.72222 25H1.38889C0.99537 25 0.665741 24.8667 0.4 24.6C0.133333 24.3343 0 24.0046 0 23.6111Z" fill="url(#paint0_linear_4_492)" />
        <defs>
          <linearGradient id="paint0_linear_4_492" x1="12.5" y1="0" x2="12.5" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#155234" />
            <stop offset="1" stopColor="#227D53" />
          </linearGradient>
        </defs>
      </svg>

    ),
    passwordEye: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="black" fillOpacity="0.54" />
      </svg>
    ),
    passwordEyeClose: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    mailIcon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.3916 7.97192L11.9994 13.1457C12.4713 13.4008 13.0389 13.4008 13.5109 13.1457L23.1186 7.97192" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.3916 7.97195C2.3916 6.21015 3.71739 4.78317 5.35261 4.78317H20.1576C21.7929 4.78317 23.1186 6.21015 23.1186 7.97195V17.5383C23.1186 19.3001 21.7929 20.727 20.1576 20.727H5.35261C3.71739 20.727 2.3916 19.3001 2.3916 17.5383V7.97195Z" stroke="currentColor" />
      </svg>

    ),
    notification: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.60051 19.5313C9.56942 19.308 9.7448 19.1327 9.96482 19.1327H15.5452C15.7652 19.1327 15.9406 19.308 15.9095 19.5313C15.7891 20.3843 15.2407 22.3214 12.755 22.3214C10.2694 22.3214 9.72088 20.3843 9.60051 19.5313Z" stroke="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.27532 19.1327C3.5706 19.1327 3.18157 18.2557 3.61444 17.7057C4.6795 16.3425 6.05386 14.2379 6.05386 12.4601C6.05386 9.56633 6.50348 6.04274 10.7621 5.07016C11.3377 4.93464 10.3635 3.18878 12.7551 3.18878C15.2567 3.18878 14.1725 4.93464 14.7481 5.07016C19.0067 6.04274 20.2535 9.56633 20.2535 12.4601C20.2535 14.2777 21.3823 16.4381 22.2225 17.8013C22.5685 18.3594 22.1723 19.1327 21.513 19.1327H4.27532Z" stroke="currentColor" />
      </svg>
    ),
    navarrow: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
    ),
    closenav: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
    ),
    rightArrowTop: (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.615385 0V1.23077H5.90154L0 7.13231L0.867692 8L6.76923 2.09846V7.38462H8V0H0.615385Z" fill="currentColor" />
      </svg>

    ),
    triangleDropIcon: (
    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 4L3 0L6 4H0Z" fill="currentColor"/>
</svg>
    ),
    greenPlusicon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="currentColor" />
      </svg>

    ),
    calenderDropDown: (
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.244078 0.244078C0.569515 -0.0813592 1.09715 -0.0813592 1.42259 0.244078L5.83333 4.65482L10.2441 0.244078C10.5695 -0.0813592 11.0972 -0.0813592 11.4226 0.244078C11.748 0.569515 11.748 1.09715 11.4226 1.42259L6.51098 6.3342C6.13673 6.70845 5.52995 6.70846 5.15569 6.3342L0.244078 1.42259C-0.0813593 1.09715 -0.0813593 0.569515 0.244078 0.244078Z" fill="black" />
      </svg>

    ),
    pause: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-icon lucide-triangle"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>),
    searchIcon:(
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.875 21.875L17.3438 17.3438M19.7917 11.4583C19.7917 16.0607 16.0607 19.7917 11.4583 19.7917C6.85596 19.7917 3.125 16.0607 3.125 11.4583C3.125 6.85596 6.85596 3.125 11.4583 3.125C16.0607 3.125 19.7917 6.85596 19.7917 11.4583Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ),

  };
  const addClassName = (
    icon: ReactElement<SVGElement>
  ): ReactElement<SVGElement> => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
  );
  return iconsNew[icon] || null;
};

export default Icons;
