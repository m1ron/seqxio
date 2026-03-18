import React from "react";
import type { ReactElement } from "react";

interface LoginCardProps {
    icon: string;
    className?: string;
    fill?: string;
    iconClass?: string;
    pathClassName?: string;
    onClick?: () => void;
}

const Icons: React.FC<LoginCardProps> = ({ icon, className, pathClassName }) => {
    const iconList = {
        hamburger: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>),
        download: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><path fill="#155234" d="m8.333 16.667-2.47-2.434h-3.43v-3.43L0 8.334l2.434-2.47v-3.43h3.429L8.333 0l2.47 2.434h3.43v3.429l2.434 2.47-2.434 2.47v3.43h-3.43zm0-2.065 1.844-1.844h2.581v-2.581l1.844-1.844-1.844-1.843V3.909h-2.581L8.333 2.065 6.49 3.909H3.909v2.58L2.065 8.334l1.844 1.844v2.581h2.58zm-2.157-3.134 2.157-1.31 2.157 1.31-.571-2.453 1.917-1.659-2.526-.203-.977-2.323-.977 2.323-2.526.203 1.918 1.66z"/></svg>),

        dashboard: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><path fill="url(#a)" d="M13.889 6.944V1.39q0-.591.4-.99.399-.399.989-.399h8.333q.59 0 .989.399.4.399.4.99v5.555q0 .591-.4.99a1.34 1.34 0 0 1-.989.4h-8.333a1.34 1.34 0 0 1-.99-.4 1.34 1.34 0 0 1-.4-.99M0 12.5V1.389q0-.591.4-.99Q.798 0 1.389 0h8.333q.591 0 .99.399.4.399.4.99V12.5q0 .59-.4.989-.399.4-.99.4H1.39a1.34 1.34 0 0 1-.989-.4A1.34 1.34 0 0 1 0 12.5m13.889 11.111V12.5q0-.59.4-.99.399-.399.989-.399h8.333q.59 0 .989.399.4.4.4.99v11.111q0 .59-.4.989a1.34 1.34 0 0 1-.989.4h-8.333a1.34 1.34 0 0 1-.99-.4 1.34 1.34 0 0 1-.4-.989M0 23.611v-5.555q0-.591.4-.99.398-.4.989-.4h8.333q.591 0 .99.4.4.399.4.99v5.555q0 .59-.4.989-.399.4-.99.4H1.39a1.34 1.34 0 0 1-.989-.4 1.34 1.34 0 0 1-.4-.989"/><defs><linearGradient id="a" x1="12.5" x2="12.5" y1="0" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#155234"/><stop offset="1" stopColor="#227d53"/></linearGradient></defs></svg>),
        map: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.5 13.542c1.506 0 2.724-.947 3.012-2.373.242-1.138-.402-2.294-1.538-2.8-1.136-.504-2.501-.208-3.331.657s-1.168 2.094-.779 3.208 1.421 1.808 2.636 1.308"/><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.5 2.083c4.687 0 8.333 3.021 8.333 7.292 0 2.365-1.328 4.781-3.213 6.797-1.48 1.588-3.402 3.14-5.12 6.745-1.719-3.605-3.64-5.157-5.12-6.745-1.885-2.016-3.213-4.432-3.213-6.797 0-4.27 3.645-7.292 8.333-7.292"/></svg>),
        projects: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><g stroke="#7b9182" strokeLinecap="round" strokeWidth="2" clipPath="url(#a)"><path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h3.353c1.635 0 2.453 0 3.188.304.735.305 1.313.883 2.469 2.04l2.647 2.646c1.156 1.156 1.734 1.734 2.038 2.47.305.734.305 1.552.305 3.187V16c0 3.771 0 5.657-1.172 6.828S19.771 24 16 24h-6c-3.771 0-5.657 0-6.828-1.172S2 19.771 2 16z"/><path d="M15.445 2.611v5.945a2 2 0 0 0 2 2h5.944M9.333 19.111h7.334M9.333 14.222h7.334M9.333 9.333h1.223"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v25H0z"/></clipPath></defs></svg>),
        calendar: (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
        <rect width="21.177" height="18.823" x="2" y="3.176" stroke="#7b9182" strokeWidth="2" rx="4"/>
        <path stroke="#7b9182" strokeWidth="2" d="M2 9.059h21.177"/><path stroke="#7b9182" strokeLinecap="round" strokeWidth="2" d="M7.882 2v2.353M17.294 2v2.353"/><circle cx="17.882" cy="14.353" r="1.765" fill="#7b9182"/></svg>),
        analytics: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 16.5V9.75M20.5 16.5V3M8.5 16.5v-9M2.5 16.5v-3M22 21H1"/></svg>),
        reports: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g clipPath="url(#a)"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.571 17.333V15M12 17.333v-4.666m3.429 4.666v-7M17.714 22H6.286a2.26 2.26 0 0 1-1.617-.683A2.36 2.36 0 0 1 4 19.667V3.333c0-.619.24-1.212.67-1.65A2.26 2.26 0 0 1 6.285 1h6.384c.303 0 .593.123.808.342l6.187 6.316c.215.219.335.516.335.825v11.184c0 .618-.24 1.212-.67 1.65a2.26 2.26 0 0 1-1.616.683"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>),
        team: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></svg>),

        settings: (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.39" d="M10.9 4.69c.457-2.253 3.678-2.253 4.134 0a3.164 3.164 0 0 0 4.107 2.371c2.18-.73 3.79 2.059 2.068 3.58a3.164 3.164 0 0 0 0 4.743c1.723 1.523.112 4.312-2.068 3.58a3.164 3.164 0 0 0-4.107 2.372c-.456 2.254-3.677 2.254-4.134 0a3.164 3.164 0 0 0-4.107-2.371c-2.18.731-3.79-2.058-2.067-3.58a3.164 3.164 0 0 0 0-4.743C3.002 9.12 4.613 6.33 6.793 7.062A3.164 3.164 0 0 0 10.9 4.69"/><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>),
        help: (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.469 9.375a3.125 3.125 0 0 1 6.073 1.042c0 2.083-3.125 3.125-3.125 3.125m.083 4.166h.01M22.918 12.5c0 5.753-4.664 10.417-10.417 10.417S2.084 18.253 2.084 12.5 6.747 2.083 12.5 2.083 22.917 6.747 22.917 12.5"/></svg>),
        logout: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#7b9182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 17 3.586-3.586a2 2 0 0 0 0-2.828L16 7"/><path stroke="#7b9182" strokeLinecap="round" strokeWidth="2" d="M8 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4M9 12h11"/></svg>),

        dots: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 4a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 4M8 13.333A.667.667 0 1 0 8 12a.667.667 0 0 0 0 1.333"/></svg>),
        issues: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M14.487 12 9.153 2.667a1.333 1.333 0 0 0-2.32 0L1.5 12a1.333 1.333 0 0 0 1.167 2h10.666a1.333 1.333 0 0 0 1.154-2M8 6v2.667M8 11.333h.007"/></svg>),

        select: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m4 6 4 4 4-4" opacity=".5"/></svg>),
        date: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M5.333 1.333V4M10.667 1.333V4M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333M2 6.667h12M5.333 9.333h.007M8 9.333h.007M10.667 9.333h.006M5.333 12h.007M8 12h.007M10.667 12h.006"/></svg>),
        time: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" clipPath="url(#a)"><path d="M8 4v4l2.667 1.333"/><path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>),
        arrowRight: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g stroke="#020817" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333"><path d="M3.334 8h9.333M8 3.333 12.667 8 8 12.667"/></g></svg>),
        arrowPrev: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M10 12 6 8l4-4"/></svg>),
        arrowNext: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#155234" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="m6 12 4-4-4-4"/></svg>),
        check: (<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" fill="none"><path fill="#0f172a" d="M3.762 6.254 9.791.214A.68.68 0 0 1 10.289 0q.284 0 .498.214A.7.7 0 0 1 11 .722a.7.7 0 0 1-.213.507L4.26 7.786A.68.68 0 0 1 3.762 8a.68.68 0 0 1-.498-.214L.205 4.722A.67.67 0 0 1 0 4.214a.73.73 0 0 1 .223-.508.7.7 0 0 1 .507-.214q.293 0 .507.214z"/></svg>),
        close: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/></svg>),


        security: (
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.88184 10.8335gkllj/L9.46538 13.4165L14.6318 8.25" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.7566 23.75L11.8931 23.259C14.2759 22.2364 16.3336 20.5814 17.8432 18.4731C19.3528 16.3649 20.2567 13.8838 20.4571 11.2985L21.0127 4.16854C21.0217 3.87326 20.9291 3.58383 20.7504 3.34864C20.5716 3.11345 20.3175 2.94677 20.0306 2.87646L10.7566 0.5L1.48267 2.825C1.19585 2.89528 0.941838 3.06188 0.763088 3.29694C0.584338 3.532 0.491676 3.82129 0.500588 4.11646L1.05611 11.2465C1.25642 13.8318 2.16033 16.313 3.66992 18.4214C5.17951 20.5298 7.23722 22.1849 9.62017 23.2075L10.7566 23.75Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        passwordEye: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="black" fillOpacity="0.54"/>
            </svg>
        ),
        passwordEyeClose: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
            </svg>
        ),
        mailIcon: (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.3916 7.97192L11.9994 13.1457C12.4713 13.4008 13.0389 13.4008 13.5109 13.1457L23.1186 7.97192" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.3916 7.97195C2.3916 6.21015 3.71739 4.78317 5.35261 4.78317H20.1576C21.7929 4.78317 23.1186 6.21015 23.1186 7.97195V17.5383C23.1186 19.3001 21.7929 20.727 20.1576 20.727H5.35261C3.71739 20.727 2.3916 19.3001 2.3916 17.5383V7.97195Z" stroke="currentColor"/>
            </svg>

        ),
        notification: (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.60051 19.5313C9.56942 19.308 9.7448 19.1327 9.96482 19.1327H15.5452C15.7652 19.1327 15.9406 19.308 15.9095 19.5313C15.7891 20.3843 15.2407 22.3214 12.755 22.3214C10.2694 22.3214 9.72088 20.3843 9.60051 19.5313Z" stroke="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.27532 19.1327C3.5706 19.1327 3.18157 18.2557 3.61444 17.7057C4.6795 16.3425 6.05386 14.2379 6.05386 12.4601C6.05386 9.56633 6.50348 6.04274 10.7621 5.07016C11.3377 4.93464 10.3635 3.18878 12.7551 3.18878C15.2567 3.18878 14.1725 4.93464 14.7481 5.07016C19.0067 6.04274 20.2535 9.56633 20.2535 12.4601C20.2535 14.2777 21.3823 16.4381 22.2225 17.8013C22.5685 18.3594 22.1723 19.1327 21.513 19.1327H4.27532Z" stroke="currentColor"/>
            </svg>
        ),
        closenav: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ),
        rightArrowTop: (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.615385 0V1.23077H5.90154L0 7.13231L0.867692 8L6.76923 2.09846V7.38462H8V0H0.615385Z" fill="currentColor"/>
            </svg>

        ),
        triangleDropIcon: (
            <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4L3 0L6 4H0Z" fill="currentColor"/>
            </svg>
        ),
        greenPlusicon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="currentColor"/>
            </svg>

        ),
        calenderDropDown: (
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.244078 0.244078C0.569515 -0.0813592 1.09715 -0.0813592 1.42259 0.244078L5.83333 4.65482L10.2441 0.244078C10.5695 -0.0813592 11.0972 -0.0813592 11.4226 0.244078C11.748 0.569515 11.748 1.09715 11.4226 1.42259L6.51098 6.3342C6.13673 6.70845 5.52995 6.70846 5.15569 6.3342L0.244078 1.42259C-0.0813593 1.09715 -0.0813593 0.569515 0.244078 0.244078Z" fill="black"/>
            </svg>

        ),
        pause: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-icon lucide-triangle"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>),
        searchIcon: (
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
