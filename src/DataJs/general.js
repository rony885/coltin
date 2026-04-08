import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

const general = {
  logo: "/images/logo/logo.png",
  address: "5611 Wellington Road, Suite 115, Gainesville",
  phone: "(84) 943 446 000",
  email: "entry@support.com",
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      url: "#",
      icon: <FaFacebookF size={24} />,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://instagram.com/shopify",
      icon: <FaInstagram size={24} />,
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com/shopify",
      icon: <SiX size={24} />,
    },
    {
      id: 4,
      name: "TikTok",
      url: "#",
      icon: <FaTiktok size={24} />,
    },
    {
      id: 5,
      name: "YouTube",
      url: "https://www.youtube.com/shopify",
      icon: <FaYoutube size={24} />,
    },
  ],
};

export default general;
