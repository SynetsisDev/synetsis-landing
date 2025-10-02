import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export const FacebookIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32v7.03C18.34 21.19 22 17.05 22 12.06Z"
      fill="currentColor"
    />
  </svg>
);

export const UserIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Zm0 2c-3.866 0-7 2.239-7 5v1c0 .552.448 1 1 1h12c.552 0 1-.448 1-1v-1c0-2.761-3.134-5-7-5Z" />
  </svg>
);

export const CheckIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".15" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const InstagramIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5Zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

export const LinkedInIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5Z" fill="currentColor" />
    <path d="M3 8.25h3.96V21H3V8.25ZM10.2 8.25h3.79v1.74h.06c.53-.95 1.84-1.95 3.79-1.95 4.06 0 4.81 2.67 4.81 6.14V21H18.7v-5.62c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V21H10.2V8.25Z" fill="currentColor" />
  </svg>
);

export const PhoneIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.85 22 2 12.15 2 1a1 1 0 011-1h3.49a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2Z"
      fill="currentColor"
    />
  </svg>
);

export const MailIcon = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2Zm0 3.2l-8 5.2-8-5.2V6h16v1.2Z"
      fill="currentColor"
    />
  </svg>
);

export const WhatsAppIcon = ({ size = 26, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path fill="currentColor" d="M19.112 17.238c-.272-.137-1.61-.794-1.86-.884-.25-.091-.432-.137-.614.136-.182.272-.704.884-.862 1.066-.159.182-.318.205-.59.068-.272-.136-1.148-.423-2.186-1.35-.808-.72-1.353-1.61-1.512-1.882-.159-.272-.017-.419.12-.556.124-.123.272-.318.408-.477.136-.159.181-.272.272-.454.091-.182.046-.34-.023-.477-.068-.136-.614-1.482-.84-2.031-.222-.534-.45-.462-.614-.47l-.523-.01c-.182 0-.477.068-.727.34-.25.272-.955.933-.955 2.276 0 1.343.98 2.64 1.118 2.822.136.182 1.93 2.948 4.676 4.13.654.282 1.162.451 1.559.577.654.208 1.25.179 1.72.109.524-.078 1.61-.658 1.838-1.294.227-.636.227-1.18.159-1.295-.068-.114-.25-.182-.523-.318z"/>
    <path fill="currentColor" d="M26.799 5.2A13.902 13.902 0 0 0 16.003 1C8.281 1 2.004 7.279 2.004 15.002c0 2.475.646 4.863 1.871 6.98L2 31l9.199-1.81a14.002 14.002 0 0 0 4.804.829h.002c7.723 0 14-6.277 14-14 0-3.741-1.456-7.26-4.205-9.819zM16.004 28.02h-.002a11.46 11.46 0 0 1-4.65-.988l-.334-.142-5.458 1.075 1.041-5.325-.157-.344A11.47 11.47 0 0 1 4.52 15c0-6.336 5.149-11.486 11.483-11.486a11.43 11.43 0 0 1 8.137 3.369A11.44 11.44 0 0 1 27.52 15c0 6.336-5.149 11.486-11.516 11.486z"/>
  </svg>
);

// Service icons
export const OpsIcon = ({ size = 22, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const InfraIcon = ({ size = 22, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="7" cy="7" r="1" fill="currentColor" />
    <circle cx="7" cy="17" r="1" fill="currentColor" />
  </svg>
);

export const CloudIcon = ({ size = 22, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M7 18h10a4 4 0 100-8 6 6 0 10-11.3 3.2A3.5 3.5 0 007 18Z"
      fill="currentColor"
    />
  </svg>
);

export default {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  MailIcon,
  OpsIcon,
  InfraIcon,
  CloudIcon,
  CheckIcon,
  WhatsAppIcon,
  UserIcon,
};
