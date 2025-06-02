# Kamal Kiran Polisetty - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Animated UI elements with Framer Motion
- Contact form with EmailJS integration
- Section-based layout for easy navigation

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS (for form submission)
- Vite (for build system)

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create an EmailJS account and get your service, template, and user IDs
4. Update the EmailJS configuration in `src/components/EmailService.ts`
5. Replace the dummy resume in `public/dummy-resume.pdf` with your actual resume
6. Run the development server: `npm run dev`

## Deployment

The site is ready for deployment to any static hosting service:

1. Build the site: `npm run build`
2. Deploy the contents of the `dist` directory to your hosting service

## EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template with variables:
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `subject`: Email subject
   - `message`: Email message
   - `to_name`: Your name (recipient)
4. Get your User ID from Account Settings
5. Update the configuration in `src/components/EmailService.ts`

## License

MIT