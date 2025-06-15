import { useState, FormEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

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
      // Your actual EmailJS service ID, template ID, and user ID
      const serviceID = 'service_uuget1x';
      const templateID = 'template_dbdfrbg';
      const userID = 'kamalkiran898@gmail.com'; // You'll need to provide your EmailJS user ID
      
      // Prepare template parameters - match these with your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kamal Kiran Polisetty'
      };
      
      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submitted state after 5 seconds
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
      icon: <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      content: "kamalkiranpolisetty@gmail.com",
      link: "mailto:kamalkiranpolisetty@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: "LinkedIn",
      content: "linkedin.com/in/kamalkiranpolisetty",
      link: "https://www.linkedin.com/in/kamalkiranpolisetty"
    },
    {
      icon: <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: "GitHub",
      content: "github.com/kamalkiranpolisetty",
      link: "https://www.github.com/kamalkiranpolisetty"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 -z-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-48 h-48 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50 -z-10 transform -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center select-none">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 pointer-events-none"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto select-none">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6 select-none">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full pointer-events-none">
                    {info.icon}
                  </div>
                  <div className="pointer-events-none">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 select-none">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 select-none">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 select-none">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/kamalkiranpolisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 pointer-events-none" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kamalkiranpolisetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 pointer-events-none" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 select-none">Send Me a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 pointer-events-none" />
                  <div className="pointer-events-none">
                    <p className="font-medium select-none">Thank you for your message!</p>
                    <p className="text-sm mt-1 select-none">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6 flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 pointer-events-none" />
                      <div className="pointer-events-none">
                        <p className="font-medium select-none">Error</p>
                        <p className="text-sm mt-1 select-none">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-4">
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  
                  <div className="mb-4">
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  
                  <div className="mb-4">
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 select-none cursor-default">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center font-medium disabled:bg-blue-400 dark:disabled:bg-blue-700 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2 pointer-events-none"></div>
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