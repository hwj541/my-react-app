import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

const About = () => {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  const experienceRef = useRef(null);
  const experienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.2,
  });

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX 设计", level: 70 },
  ];

  const experiences = [
    {
      type: "education",
      title: "计算机科学学士",
      organization: "某知名大学",
      period: "2015 - 2019",
      description: "主修计算机科学，专注于Web开发和人工智能领域。",
    },
    {
      type: "work",
      title: "资深前端开发",
      organization: "某科技公司",
      period: "2020 - 至今",
      description: "负责开发和维护大型Web应用，优化性能和用户体验。",
    },
    {
      type: "certificate",
      title: "React高级开发认证",
      organization: "某技术认证机构",
      period: "2021",
      description: "完成了React高级开发培训和认证，掌握了最新的前端开发技术。",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-16">
      {/* 关于我 */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop";
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-6 leading-tight">
                关于<span className="text-primary">我</span>
              </h1>
              <p className="text-lg mb-6">
                大家好，我是黄文俊，一名充满激情的Web开发者。我对创造有用、美观的数字产品充满热情。
              </p>
              <p className="text-lg mb-6">
                我专注于前端开发，特别是React生态系统。我喜欢将复杂的问题转化为优雅的解决方案，并始终追求用户体验和性能的平衡。
              </p>
              <p className="text-lg">
                除了编码，我还喜欢分享我的知识和经验，通过写博客和参与开源项目来回馈社区。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section className="py-20 bg-white" ref={skillsRef}>
        <div className="container-custom">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">我的技能</h2>
            <p className="max-w-2xl mx-auto text-lg">
              以下是我多年来积累的核心技术能力。我一直在不断学习和提升这些技能。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 经历 */}
      <section className="py-20 bg-light" ref={experienceRef}>
        <div className="container-custom">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">经历</h2>
            <p className="max-w-2xl mx-auto text-lg">
              我的教育背景和工作经验塑造了我的专业技能和视角。
            </p>
          </motion.div>

          <div className="relative border-l-2 border-primary pl-8 ml-4 md:ml-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate={experienceInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-[40px] bg-white p-1 rounded-full border-2 border-primary">
                  {exp.type === "education" && (
                    <FaGraduationCap className="text-xl text-primary" />
                  )}
                  {exp.type === "work" && (
                    <FaBriefcase className="text-xl text-primary" />
                  )}
                  {exp.type === "certificate" && (
                    <FaCertificate className="text-xl text-primary" />
                  )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between flex-wrap mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-sm font-medium bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-primary mb-2">
                    {exp.organization}
                  </p>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 爱好和兴趣 */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">爱好和兴趣</h2>
            <p className="max-w-2xl mx-auto text-lg">
              工作之外，我也有许多兴趣爱好，这些活动帮助我保持创造力和平衡。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-light p-6 rounded-lg shadow-md text-center"
            >
              <FaCode className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="mb-2">开源贡献</h3>
              <p>我积极参与开源社区，贡献代码并从中学习。</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-light p-6 rounded-lg shadow-md text-center"
            >
              <FaGraduationCap className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="mb-2">持续学习</h3>
              <p>我热爱学习新技术和方法，不断扩展我的知识范围。</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-light p-6 rounded-lg shadow-md text-center"
            >
              <FaBriefcase className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="mb-2">创业精神</h3>
              <p>我喜欢探索新的项目和创意，将想法转化为现实。</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
