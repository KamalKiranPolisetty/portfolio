import emailjs from 'emailjs-com';

/**
 * EmailJS configuration and helper functions
 * Set up your EmailJS account at https://www.emailjs.com/
 * Then update the service, template, and user ID values below
 */

// Your actual EmailJS IDs
const SERVICE_ID = 'service_uuget1x';
const TEMPLATE_ID = 'template_dbdfrbg';
const USER_ID = 'ckep1zDjbUHQ2sb01'; // Replace with your actual EmailJS Public Key from dashboard

/**
 * Initialize EmailJS with your user ID
 */
export const initEmailJS = () => {
  emailjs.init(USER_ID);
};

/**
 * Send an email using EmailJS
 * @param {Object} formData - The form data to send
 * @returns {Promise} - A promise that resolves when the email is sent
 */
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'Kamal Kiran Polisetty', // Recipient name (you)
    to_email: 'kamalkiranpolisetty@gmail.com', // Recipient email address
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
};