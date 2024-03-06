import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { link: "https://www.linkedin.com/in/eduardo-souza-santos-323232244", name: "linkedin", icon: <FaLinkedinIn /> },
  { link: "https://github.com/Eduardoss45", name: "github", icon: <FaGithub /> },
  { link: "https://www.instagram.com/eduardosantos25116", name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
