import React from "react";
import FooterLink from "./FooterLink";
import Logo from "../../components/Logo";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      logo: "/Ayuda_logo.svg",
      text: "Ayuda",
      link: "/ayuda",
    },
    {
      logo: "/Comunidad.svg",
      text: "Normas de la Comunidad",
      link: "/normas",
    },
    {
      logo: "/Terminos.svg",
      text: "Términos y condiciones",
      link: "/terminos",
    },
    {
      logo: "/Pregunta.svg",
      text: "Preguntas Frecuentes",
      link: "/preguntas",
    },
    {
      logo: "/Privacidad.svg",
      text: "Políticas de Privacidad",
      link: "/politicas",
    },
    { logo: "/Soporte.svg", text: "Soporte", link: "/soporte" },
  ];

  return (
    <footer className="flex justify-center bg-header-background text-white pt-8 pb-2">
      <div className="container flex flex-col items-center justify-center md:flex-row gap-4">
        <div className="flex">
          <img
            src="/footer_person.png"
            alt="Footer Image"
            className="w-48 h-48 md:w-72 md:h-72"
          />
          <div className="md:-ms-16 ">
            <Logo />
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:border-l-2 md:border-white p-4">
          {footerLinks.map((link, index) => (
            <FooterLink
              key={index}
              logo={link.logo}
              text={link.text}
              link={link.link}
            />
          ))}
          <div className="flex justify-end gap-2">
            <img src="/Instagram.svg" alt="instagram" className="w-10 h-10" />
            <img src="/FB.svg" alt="FB" className="w-10 h-10" />
          </div>

          <p className="text-black ms-auto">Copyright © Lasrecetasdelanona</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
