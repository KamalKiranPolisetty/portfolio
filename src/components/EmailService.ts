import emailjs from 'emailjs-com';

/**
 * EmailJS configuration and helper functions
 * Set up your EmailJS account at https://www.emailjs.com/
 * Then update the service and template IDs below
 */

// Your actual EmailJS IDs
const SERVICE_ID = 'service_uuget1x';
const TEMPLATE_ID_AUTO_REPLY = 'template_dbdfrbg'; // Template for auto-reply to user
const TEMPLATE_ID_NOTIFY_ME = 'template_notify_me'; // Template for notification to you (create this)
const USER_ID = 'ckep1zDjbUHQ2sb01'; // Replace with your actual EmailJS Public Key from dashboard

/**
 * Initialize EmailJS with your user ID
 */
export const initEmailJS = () => {
  emailjs.init(USER_ID);
};

/**
 * Send auto-reply email to the user
 * @param {Object} formData - The form data to send
 * @returns {Promise} - A promise that resolves when the email is sent
 */
export const sendAutoReplyEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    to_name: formData.name,
    to_email: formData.email,
    from_name: 'Kamal Kiran Polisetty',
    from_email: 'kamalkiranpolisetty@gmail.com',
    subject: `Re: ${formData.subject}`,
    original_message: formData.message,
    reply_message: `Thank you for reaching out! I've received your message about "${formData.subject}" and will get back to you as soon as possible.`
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_AUTO_REPLY, templateParams);
};

/**
 * Send notification email to yourself
 * @param {Object} formData - The form data to send
 * @returns {Promise} - A promise that resolves when the email is sent
 */
export const sendNotificationEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    to_name: 'Kamal Kiran Polisetty',
    to_email: 'kamalkiranpolisetty@gmail.com',
    subject: `New Contact Form Submission: ${formData.subject}`,
    message: formData.message,
    user_name: formData.name,
    user_email: formData.email,
    inquiry_subject: formData.subject
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_NOTIFY_ME, templateParams);
};

/**
 * Send both emails (auto-reply to user and notification to yourself)
 * @param {Object} formData - The form data to send
 * @returns {Promise} - A promise that resolves when both emails are sent
 */
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Send both emails concurrently
    const [autoReplyResult, notificationResult] = await Promise.all([
      sendAutoReplyEmail(formData),
      sendNotificationEmail(formData)
    ]);

    console.log('Auto-reply sent:', autoReplyResult);
    console.log('Notification sent:', notificationResult);

    return {
      autoReply: autoReplyResult,
      notification: notificationResult
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
};