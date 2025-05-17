import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // 这里通常会有一个实际的表单提交逻辑，例如 API 调用
    // 这里我们用 setTimeout 模拟一个异步 API 调用
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: "电子邮件",
      content: "your-email@example.com",
      link: "mailto:your-email@example.com",
    },
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: "电话",
      content: "+86 123 4567 8910",
      link: "tel:+8612345678910",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: "地址",
      content: "北京市海淀区中关村大街1号",
      link: "https://maps.google.com/?q=北京市海淀区中关村大街1号",
    },
  ];

  const inputClasses =
    "w-full px-4 py-3 bg-light border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

  return (
    <div className="pt-16">
      <section className="py-20 bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4">
              联系<span className="text-primary">我</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              无论您有什么问题或合作机会，都可以通过以下方式联系我。我会尽快回复您的消息。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === "地址" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.a>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-primary text-white p-8 md:p-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  让我们开始一段对话
                </h2>
                <p className="mb-8">
                  如果您有任何问题、建议或合作意向，请填写这个表单。我将尽快回复您的消息。
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <FaEnvelope className="text-xl" />
                  <span>your-email@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-xl" />
                  <span>+86 123 4567 8910</span>
                </div>
                <div className="mt-12">
                  <p className="text-sm opacity-80">
                    您也可以通过社交媒体与我联系，链接在页面底部。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12"
              >
                <h3 className="text-2xl font-bold mb-6">发送消息</h3>

                {formStatus.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">消息已发送</h4>
                    <p className="text-gray-600">
                      感谢您的留言，我会尽快回复您！
                    </p>
                    <button
                      className="mt-6 text-primary font-medium hover:underline"
                      onClick={() =>
                        setFormStatus({
                          submitted: false,
                          submitting: false,
                          error: null,
                        })
                      }
                    >
                      发送另一条消息
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 font-medium"
                        >
                          您的姓名
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="请输入您的姓名"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 font-medium"
                        >
                          电子邮件
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="请输入您的邮箱地址"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block mb-2 font-medium"
                        >
                          主题
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="请输入消息主题"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 font-medium"
                        >
                          消息内容
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className={inputClasses}
                          placeholder="请输入您的消息内容"
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        className="btn btn-primary flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={formStatus.submitting}
                      >
                        {formStatus.submitting ? (
                          <span className="inline-flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            发送中...
                          </span>
                        ) : (
                          <span className="inline-flex items-center">
                            <FaPaperPlane className="mr-2" />
                            发送消息
                          </span>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
