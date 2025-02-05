import React from "react";

interface FooterLinkProps {
  logo: string;
  text: string;
  link: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ logo, text, link }) => {
  return (
    <a
      href={link}
      className="flex text-black items-center space-x-2 hover:text-azulOscuro"
    >
      <img src={logo} alt={text} className="w-6 h-6" />
      <span>{text}</span>
    </a>
  );
};

export default FooterLink;
