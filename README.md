# ScapeSync

**Live Preview:**  
https://scape-sync-pro.netlify.app/

---

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Testing](#testing)
- [Contact / Support](#contact--support)

---

## Project Description

**ScapeSync** is a responsive job management web application designed for business owners, employees, and clients. It provides a user-friendly interface to streamline service bookings, job and staff management, real-time updates, and analytics—all in one powerful platform.

The purpose of this project is to create a modern, intuitive, and engaging solution that helps users efficiently manage jobs, staff, and client interactions, whether on desktop or mobile.

---

## Features

- **Role Selection:** Choose between Client or Business Owner to tailor your experience.
- **User Registration & Login:** Secure account creation and authentication.
- **Email Verification:** 6-digit email OTP verification flow.
- **Password Reset:** Forgot password flow with email-based reset.
- **Job & Service Management:** Platform for booking, assigning, and tracking jobs (UI components only).
- **Real-Time Tracking:** See live job and employee status updates.
- **Performance Analytics:** Access to business and staff insights.
- **Responsive Design:** Optimized for both desktop and mobile.
- **Custom Animations:** Modern UI with subtle interactive effects.
- **Accessibility:** Keyboard navigation and screen reader support.
- **Google Auth UI:** UI for social login (Google).
- **Testimonials & FAQ:** Real user feedback and quick answers.

---

## Tech Stack

- **React** — Frontend library for building the UI
- **React Router** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework
- **Custom CSS** — For branding and animation (`style.css`)
- **Google Fonts (Public Sans)** — For a modern look
- **CSS3 Animations & Media Queries** — For interactivity and responsiveness

---

## Installation

### Prerequisites

- [Git](https://git-scm.com/) (to clone the repository)
- [Node.js & npm](https://nodejs.org/) (for installing dependencies)
- A modern web browser (Chrome, Edge, Firefox, Safari, etc.)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/scapesync.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd scapesync
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run locally:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`.

---

## Usage

- **Homepage:** Browse features, testimonials, and FAQs.
- **Role Selection:** Choose the user type before registration.
- **Register/Login:** Create an account or log in with your email.
- **Email Verification:** Enter the 6-digit code sent to your email.
- **Forgot Password:** Reset your password via email.
- **Account Success Pages:** Confirmation upon account creation or password change.

---

## Configuration

- **Images:** Ensure all referenced images exist in the `/images` directory (e.g., `logo.webp`, `client.webp`, `business.webp`, etc.).
- **API Configuration:** Update API endpoints or keys in `src/services/api.js` as required for your backend.
- **No environment variables or backend configuration** are needed for basic static use.  
  For production, add any required environment variables via a `.env` file.
- **Customizing Content:**
  - Update homepage text, testimonials, or FAQ in their respective component files.
  - Modify colors, layout, or typography via Tailwind classes or `style.css`.

---

## Testing 🧪

- **No automated tests** are set up.
- For manual testing:
  - Open the app in different browsers and devices.
  - Test registration, login, and password reset flows.
  - Check responsiveness on various screen sizes.
  - Validate HTML/CSS via [W3C Validator](https://validator.w3.org/).

---

## Contact / Support

- **Author:** [Md Nayeem](https://www.github.com/usernayeem)
- **Repository**: https://github.com/usernayeem/scape-sync
- **Issues:** Please use the [GitHub Issues page](https://github.com/usernayeem/scape-sync/issues) for bug reports or feature requests.
