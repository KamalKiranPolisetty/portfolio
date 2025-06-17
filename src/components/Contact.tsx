import { useState, FormEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail, initEmailJS } from './EmailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      initEmailJS();
      await sendEmail(formData);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      content: "kamalkiranpolisetty@gmail.com",
      link: "mailto:kamalkiranpolisetty@gmail.com"
    },
    {
      icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />,
      title: "LinkedIn",
      content: "linkedin.com/in/kamalkiranpolisetty",
      link: "https://www.linkedin.com/in/kamalkiranpolisetty"
    },
    {
      icon: <Github className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />,
      title: "GitHub",
      content: "github.com/kamalkiranpolisetty",
      link: "https://www.github.com/kamalkiranpolisetty"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-32 h-32 md:w-64 md:h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 -z-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-24 h-24 md:w-48 md:h-48 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50 -z-10 transform -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center select-none">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 md:mb-8 pointer-events-none"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto select-none text-sm md:text-base px-4">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 select-none">Contact Information</h3>
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded-full pointer-events-none group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    {info.icon}
                  </div>
                  <div className="pointer-events-none min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 select-none text-sm md:text-base">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 select-none text-xs md:text-sm break-all">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 select-none">Follow Me</h3>
              <div className="flex space-x-3 md:space-x-4">
                <a 
                  href="https://github.com/kamalkiranpolisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5 pointer-events-none" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kamalkiranpolisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5 pointer-events-none" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 select-none">Send Me a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 pointer-events-none" />
                  <div className="pointer-events-none">
                    <p className="font-medium select-none text-sm md:text-base">Thank you for your message!</p>
                    <p className="text-xs md:text-sm mt-1 select-none">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-lg flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 pointer-events-none" />
                      <div className="pointer-events-none">
                        <p className="font-medium select-none text-sm md:text-base">Error</p>
                        <p className="text-xs md:text-sm mt-1 select-none">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 select-none cursor-default">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm md:text-base"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 select-none cursor-default">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm md:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 select-none cursor-default">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm md:text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 select-none cursor-default">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm md:text-base resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center font-medium disabled:bg-blue-400 dark:disabled:bg-blue-700 disabled:cursor-not-allowed cursor-pointer text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-t-2 border-b-2 border-white mr-2 pointer-events-none"></div>
                        <span className="select-none">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 pointer-events-none" />
                        <span className="select-none">Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;