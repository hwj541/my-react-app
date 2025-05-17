import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaRocket, FaCode, FaLightbulb } from "react-icons/fa";

const Home = () => {
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: "快速响应",
      description:
        "采用最新的Web技术，确保网站在各种设备上都能快速加载和响应。",
    },
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: "代码精简",
      description: "代码结构清晰，维护简单，使用最佳实践进行开发。",
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "创新设计",
      description: "采用现代UI/UX设计，带来令人愉悦的浏览体验。",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "项目一",
      description: "这是一个令人惊叹的项目描述...",
      imageUrl: "https://via.placeholder.com/600x400",
      link: "/projects",
    },
    {
      id: 2,
      title: "项目二",
      description: "这是另一个令人惊叹的项目描述...",
      imageUrl: "https://via.placeholder.com/600x400",
      link: "/projects",
    },
    {
      id: 3,
      title: "项目三",
      description: "这是第三个令人惊叹的项目描述...",
      imageUrl: "https://via.placeholder.com/600x400",
      link: "/projects",
    },
  ];

  return (
    <div className="pt-16">
      {/* 英雄区域 */}
      <section className="min-h-[90vh] flex items-center bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 leading-tight">
                欢迎来到 <span className="text-primary">黄文俊的实验室</span>
              </h1>
              <p className="text-lg mb-8">
                这是一个展示我的项目、想法和经验的地方。
                探索创新、技术和设计的无限可能。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    查看项目
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="btn border border-primary text-primary hover:bg-primary hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    联系我
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Hero"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特性部分 */}
      <section className="py-20 bg-white" ref={featuresRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">特色功能</h2>
            <p className="max-w-2xl mx-auto text-lg">
              我专注于提供高质量、高性能的数字体验。以下是我的一些核心优势。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-light p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目展示 */}
      <section className="py-20 bg-light" ref={projectsRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">精选项目</h2>
            <p className="max-w-2xl mx-auto text-lg">
              以下是我最近的一些项目展示。每个项目都代表着不同的挑战和解决方案。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={
                    project.imageUrl ||
                    "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop"
                  }
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <Link to={project.link}>
                    <motion.div
                      className="inline-flex items-center text-primary font-medium"
                      whileHover={{ x: 5 }}
                    >
                      了解更多 <FaArrowRight className="ml-2" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/projects">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看所有项目
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA部分 */}
      <section className="py-20 bg-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">准备好开始合作了吗？</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
              无论您有一个项目想法，还是想要咨询相关问题，我都很乐意与您交流。
            </p>
            <Link to="/contact">
              <motion.button
                className="btn btn-primary text-lg px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                联系我
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
