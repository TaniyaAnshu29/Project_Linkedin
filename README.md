
# React Project Using React JS

Linkedin Clone is a template for a Linkedin-like web page built using React JS. The project will focus on UI/UX design, state management, and dynamic content rendering.

## Features

- Linkedin-like UI with a modern and professional design.
- React state management to handle user interactions.
- React Router for seamless navigation.
- Local Storage to persist like posts of various users in linkedin, likes of a post, saved job postings and saved job roles.
- Dynamic posts feeds, users, and job listings from JSON.
- Responsive design.


## Installation & Setup
-> Create React Project using Vite method
npm create vite@latest clone-app --template react

- clone-app -> project name

- --template react -> React template

- cd clone-app

Install Dependencies
- npm Install

Run and start react project
- npm run dev

## Features & Functionality of Log in page 
- Designed a clean login page of linkedin which includes sign in options "Continue with Google" and "Sign in with Apple".
- Include email & password fields (have option to hide and show the password) with a login button.
- Have option in case forgot password
- On click of login button, it navigate to the home page using react router.
[ import { useNavigate } from "react-router-dom" ]

- Screen Shot of Log in page
![image alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/524b7f4f544aadf35e18dc31701eeaea50012bf4/Screenshot%202025-03-27%20123118.png)


## Features & Functionality of Navbar of linkedin page

A navigation bar (navbar) is an important element in every webpages, as it helps users easily navigate through different sections of a website.

- linkedin-like navbar includes linkedin logo, search text for jobs, skills and companies, icons like home, my network, jobs, messaging, notifications, Me profile, Work and logout button.

On click of Logout Button, it navigate to Login page.
- "/" -> <LoginPage />

On click of sign in or home icon
- "/home" -> <HomePage />

On click of network icon
- "/my-network" -> <MyNetwork />

On click of Jobs icon
- "/jobs" -> <JobPage />

On click of Profile(Me) icon
- "/profile" -> <ProfilePage />

![image alt]()
