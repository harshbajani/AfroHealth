import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = {
    SHOP: [
      { name: "The Pouch", href: "#" },
      { name: "Travel Packs", href: "#" },
    ],
    "LEARN MORE": [
      { name: "Ingredients", href: "#" },
      { name: "Research", href: "#" },
      { name: "AfroHealth Reviews", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Product Authentication", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    ABOUT: [
      { name: "About Us", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Refer Friends", href: "#" },
      { name: "Partners", href: "#" },
      { name: "2023 Impact Report", href: "#" },
      { name: "Accessibility Statement", href: "#" },
    ],
    CONTACT: [
      { name: "My Account", href: "#" },
      { name: "Track My Order", href: "#" },
      { name: "Help", href: "#" },
      { name: "Careers", href: "#" },
    ],
  };

  return (
    <footer className="bg-jungleGreen text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section with Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Shop Section */}
          <div>
            <h3 className="font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2">
              {footerLinks.SHOP.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-canary text-white font-normal"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More Section */}
          <div>
            <h3 className="font-medium mb-4">LEARN MORE</h3>
            <ul className="space-y-2">
              {footerLinks["LEARN MORE"].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-canary text-white font-normal"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-medium mb-4">ABOUT</h3>
            <ul className="space-y-2">
              {footerLinks.ABOUT.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-canary text-white font-normal"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-medium mb-4">CONTACT</h3>
            <ul className="space-y-2">
              {footerLinks.CONTACT.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-canary text-white font-normal"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-medium mb-4">CONNECT</h3>
            <p className="mb-4">Join Our Newsletter</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white px-4 py-3 rounded-full text-black pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 bg-white hover:border-none">
                →
              </button>
            </div>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://www.instagram.com/afrohealth/"
                target="_blank"
                className="hover:text-canary text-white"
              >
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-canary text-white">
                <FaFacebookF size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-canary text-white">
                <FaXTwitter size={24} />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="#" className="hover:text-canary text-white">
                <FaTiktok size={24} />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="#" className="hover:text-canary text-white">
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo and Legal */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-4xl md:text-6xl font-bold mb-8 md:mb-0">
              <span className="text-canary">Afro</span>
              <span className="text-white">Health</span>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-canary text-white font-normal">
                Privacy
              </a>
              <a href="#" className="hover:text-canary text-white font-normal">
                Do Not Sell My Personal Info
              </a>
              <a href="#" className="hover:text-canary text-white font-normal">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
