import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = ["all", "web", "mobile", "设计", "其他"];

  // 使用 useMemo 避免 projects 在每次渲染时重新创建
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "响应式电商网站",
        description:
          "基于React和Node.js开发的全栈电商平台，支持响应式设计和多种支付方式。",
        image:
          "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop",
        categories: ["web"],
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubLink: "https://github.com/your-username/ecommerce",
        liveLink: "https://your-ecommerce.com",
      },
      {
        id: 2,
        title: "任务管理应用",
        description:
          "一个简洁高效的任务管理应用，具有拖放排序、标签分类和日历视图等功能。",
        image:
          "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?q=80&w=2039&auto=format&fit=crop",
        categories: ["web", "mobile"],
        technologies: ["React Native", "Firebase", "Redux"],
        githubLink: "https://github.com/your-username/task-manager",
        liveLink: "https://your-taskmanager.com",
      },
      {
        id: 3,
        title: "Portfolio网站设计",
        description:
          "为自由职业设计师设计和开发的作品集网站，展示了其设计作品和服务。",
        image:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
        categories: ["web", "设计"],
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/your-username/portfolio-design",
        liveLink: "https://portfolio-design.com",
      },
      {
        id: 4,
        title: "天气预报应用",
        description:
          "一个精美的天气预报应用，提供实时天气数据和7天预报，支持多城市切换。",
        image:
          "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2036&auto=format&fit=crop",
        categories: ["mobile"],
        technologies: ["React Native", "OpenWeather API", "Geolocation"],
        githubLink: "https://github.com/your-username/weather-app",
        liveLink: "https://weather-app.com",
      },
      {
        id: 5,
        title: "个人博客平台",
        description:
          "一个简洁现代的个人博客平台，支持Markdown编辑和代码高亮显示。",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
        categories: ["web"],
        technologies: ["Next.js", "Tailwind CSS", "Prisma"],
        githubLink: "https://github.com/your-username/blog-platform",
        liveLink: "https://your-blog.com",
      },
      {
        id: 6,
        title: "智能家居控制面板",
        description:
          "用于智能家居设备控制的仪表板界面，支持多种设备类型和场景设置。",
        image:
          "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
        categories: ["web", "其他"],
        technologies: ["Vue.js", "MQTT", "Chart.js"],
        githubLink: "https://github.com/your-username/smart-home",
        liveLink: "https://smart-home-dashboard.com",
      },
    ],
    []
  );

  const filterProjects = useCallback(
    (category, term) => {
      let filtered = projects;

      if (category !== "all") {
        filtered = filtered.filter((project) =>
          project.categories.includes(category)
        );
      }

      if (term) {
        const lowerCaseTerm = term.toLowerCase();
        filtered = filtered.filter(
          (project) =>
            project.title.toLowerCase().includes(lowerCaseTerm) ||
            project.description.toLowerCase().includes(lowerCaseTerm) ||
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(lowerCaseTerm)
            )
        );
      }

      setFilteredProjects(filtered);
      setIsLoaded(true);
    },
    [projects]
  );

  // 初始化时加载所有项目
  useEffect(() => {
    setFilteredProjects(projects);
    setIsLoaded(true);
  }, [projects]);

  // 当筛选条件改变时重新过滤
  useEffect(() => {
    filterProjects(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm, filterProjects, projects]);

  // 确保在页面加载时始终显示所有项目
  useEffect(() => {
    console.log("当前筛选结果数量:", filteredProjects.length);
    if (filteredProjects.length === 0 && isLoaded) {
      console.log("重置为所有项目");
      setFilteredProjects(projects);
    }
  }, [filteredProjects, projects, isLoaded]);

  return (
    <div className="pt-16">
      <section className="py-20 bg-light min-h-screen">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4">
              我的<span className="text-primary">项目</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              以下是我近年来完成的一些项目。每个项目都代表了特定的技术挑战和创新解决方案。
            </p>
          </motion.div>

          {/* 搜索和过滤 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex justify-center space-x-4 overflow-x-auto pb-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-white text-dark hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索项目..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* 备用项目列表显示方式 */}
          {filteredProjects.length === 0 && isLoaded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden group h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/600x400?text=图片加载失败";
                      }}
                    />
                    <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-dark bg-opacity-50 p-3 rounded-full"
                          >
                            <FaGithub className="text-xl" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-dark bg-opacity-50 p-3 rounded-full"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 动画项目列表 */}
          <AnimatePresence>
            {filteredProjects.length > 0 && (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative overflow-hidden group h-60">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/600x400?text=图片加载失败";
                        }}
                      />
                      <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          {project.githubLink && (
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white bg-dark bg-opacity-50 p-3 rounded-full"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaGithub className="text-xl" />
                            </motion.a>
                          )}
                          {project.liveLink && (
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white bg-dark bg-opacity-50 p-3 rounded-full"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaExternalLinkAlt className="text-xl" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs font-medium bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 无结果提示 */}
          {filteredProjects.length === 0 && !projects.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg">
                没有找到符合条件的项目。请尝试其他搜索条件。
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
