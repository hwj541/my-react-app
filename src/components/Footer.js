import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaWeibo, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/your-username",
      label: "GitHub",
    },
    {
      icon: <FaWeibo />,
      url: "https://weibo.com/your-username",
      label: "微博",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/your-username",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:your-email@example.com",
      label: "邮箱",
    },
  ];

  return (
    <footer className="bg-dark text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">黄文俊的实验室</h3>
            <p className="mb-4 text-gray-300">探索科技与创新的无限可能。</p>
            <div className="flex space-x-4 mt-auto">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  关于
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors"
                >
                  项目
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  联系
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">联系我</h3>
            <p className="text-gray-300">
              如果您有任何建议或合作机会，欢迎随时联系我。
            </p>
            <a
              href="mailto:your-email@example.com"
              className="mt-2 inline-block text-primary hover:underline"
            >
              your-email@example.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} 黄文俊的实验室. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
