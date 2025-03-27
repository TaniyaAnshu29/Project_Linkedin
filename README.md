
# React Project Using React JS
## 1. Project Description

Linkedin Clone is a template for a Linkedin-like web page built using React JS. LinkedIn is the biggest professional networking platform on the internet. It helps people find jobs or internships, connect with others in their industry, and learn new skills to grow their careers. The project will focus on UI/UX design, state management, and dynamic content rendering.

## 2. Key Features

- Linkedin-like UI with a modern and professional design.
- React state management to handle user interactions.
- React Router for seamless navigation.
- Local Storage to persist like posts of various users in linkedin, likes of a post, saved job postings and saved job roles.
- Dynamic posts feeds, users, and job listings from JSON.
- jobs searched by job id.
- Responsive design.

## 3. Tech stack used
- Frontend: HTML, CSS, JavaScript, React, Bootstrap
- Routing: React Router DOM
- State Management: UseState, UseEffect
- Local Storage: For likes, posts, user bio, connection persistence
- Deployment: Netlify
- Version control: GitHub

  
## 4. Installation & Setup

### Create a New Project  
->Install Node.js and npm on the system.  
-> Create React Project using Vite method
npm create vite@latest clone-app --template react
- clone-app (project name)
- --template react (React template)
- cd clone-app
Necessary Dependencies must be installed
- npm Install
Run and start react project
- npm run dev

## 5. code structure

clone-app
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
│
├── public
│   │── vite.svg
│   ├── images/
│   ├── AnotherUser.json
│   ├── jobs.json
│   ├── people.json
│   ├── peopleProfile.json
│   ├── posts.json
│   ├── trendy.json
│   ├── user.json
│
├── src
│   ├── assets/
│   ├── App.jsx
│   ├── Connections.css
│   ├── Connections.jsx
│   ├── HomePage.css
│   ├── HomePage.jsx
│   ├── JobDetails.css
│   ├── JobDetails.jsx
│   ├── JobPage.css
│   ├── JobPage.jsx
│   ├── LoginPage.css
│   ├── LoginPage.jsx
│   ├── main.jsx
│   ├── MyNetwork.css
│   ├── MyNetwork.jsx
│   ├── Navbar.css
│   ├── Navbar.jsx
│   ├── NewNavbar.css
│
└── node_modules/

## 6. Coding standards 
### state management:
- useState() for local storage components
- persistence in local storage
### styling approach:
- no use of inline styles
- css and bootstrap grid
### Error handling:
- Handling API errors using fetching from json.
- Handling local staorage errors

  
## 7. Error handling
### Handling API errors
- project fetches data from JSON files like fetch("/people.json"), fetch("/user.json"). To prevent crashes.
### Handling LocalStorage Errors
- project relies on localStorage for saving user data like setUser, setConnections. If localStorage is unavailable, it might break functionality.

### Handling Navigation Errors
- using useNavigate() for avoiding incorrect path issues.

## Debugging 
- using console logs
- validate local storage data

## 8. UI/UX Design of web page (Overview of features and functionality of linkedin clone page)

### Features & Functionality of Log in page 
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
- "/" -> LoginPage

On click of sign in or home icon
- "/home" -> HomePage

On click of network icon
- "/my-network" -> MyNetwork

On click of Jobs icon
- "/jobs" -> JobPage

On click of Profile(Me) icon
- "/profile" -> ProfilePage

![image alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/d43b818a064d59a06a46feed5aa21c50a39032ff/Screenshot%202025-03-27%20133649.png)

## Features & Functionality of Home page
- The home page consists of three section left, right and middle.

- Left section shows the profile of user like profile pic, name, location, user's connections (fetched from <user.json>) and blocks of icons including saved items, groups, newsletter, events.

- Middle section includes user's post section with profile pic where user can post on linkedin profile. The posts can be photo, video, any event and texts as shown in the icons.
- Middle section also includes a posts section which shows the posts(text, images) of different users on linkedin with their profile pic, name amd profession and a follow button so that user can follow them.
- The posts are fetched from <posts.json>.
- Below every post, there is icons for like, comment, repost and share.
- On click of like button, it increases the count by 1 as value of count persist on local Storage. 
- On click of comment icon, it open a comment section where user can write any comment on that particular post.
- Right section shows the trendy news by fetching the data from <trendy.json>
  
![image alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/1e6eeb490b04e44a875d5654afc5d22b9dfd153c/Home%20Page%20LC.png)
![image alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/ba85b92b05bab27ec1301e4996504d5406fa669f/Home%20Page%202%20LC.png)


## Features and Functionality of User Profile Page

- The profile page of any webpage shows the details or bio of user, where user itself can edit their bio in that page.
- This page consist of two sections, left and right section.
- The left section display user’s name, profile picture, headline, and connections count, location. On the top right of left section, there is edit icon through which user can edit profile and can save their changes as details get stored on local storage.
- On the same left section, there is open to work box where job title or preferences, and edit button are shown, On click of that edit button user can edit their job preferences or title and got saved on local storage.
- On the below of left section, there is a block where user's posts with texts are shown, fetched by <posts.json>.
- On the same profile page, there is a sidebar with "People You May Know". This sidebar consist of various users (with their name, profession, and connect button) fetched from <people.json>
  
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/c1ec563239e185b4845d8c7f30764609782d7ea8/Profile%20LC.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/c1ec563239e185b4845d8c7f30764609782d7ea8/Profile%202%20LC.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/c1ec563239e185b4845d8c7f30764609782d7ea8/Profile%203%20LC.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/c1ec563239e185b4845d8c7f30764609782d7ea8/Profile%204%20LC.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/c1ec563239e185b4845d8c7f30764609782d7ea8/Profile%205%20LC.png)


## Features and Functionality of Job Listings Page & Job Detail page
A Job Listing Page in a LinkedIn Clone allows users to search for job opportunities, view detailed job descriptions, and apply directly through the platform. It helps job seekers find relevant positions based on keywords, location, and industry. It also enabling recruiters to post job openings and connect with potential candidates. 

- When the job icon on navbar is clicked, one more search bar get added to the navbar to filter jobs based on job title and location.
- So, one search bar is based on job title while another one is based on job location.
- It shows the lists of Jobs ("Jobs Picks for You") that are fetched from <jobs.json>.
- Each job cards include company's logo and name, job title and location with save and description button.
- On click of "save" button, it converted to "saved" and get stored in local storage.
- On click of "View description" button from list, based on the job Id's, job list page linked to job details page and open a detailed job description modal, where the description of any of the selected jobs will displayed. 
- Selected job displays the company logo and name, job title and location, "apply now" button, "save job" button, "About the job" section and all the detials are fetched from <jobs.json>.
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Job%20List%201.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Job%20List%202.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Job%20List%203.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Job%20List%204.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Job%20List%205.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Job%20List%206.png)

## Features & Functionality of Networking and Connections page

"My Network" page helps users build and manage professional connections. This page allows users to send and accept connection requests, view their existing connections, and discover new professionals based on mutual interests. It enhances networking by suggesting relevant people, companies, and groups to follow.
- In this page, there is two blocks for showing "my connections" and "people you may know".
- In "people you may know" sidebar, it diplays the lists of people (with their profile pic, name, mutual connections) with connect button through which user can connect to them.
- On click of "connect" button, it changed to "connected" button, the number of connection(in another block) get increases by one and get stored in local storage (my connection page).
- Clicking the connections from another block of the page opens the another page of my-connection where the lists of peoples user has connected will show.
- That page shows profile pic,name, profession and time when user get connected is shown.
  
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Network%201.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Network%202.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Network%203.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/a06a4901cfe99a93c40c9bca8a66b70758852ae4/Network%204.png)
![images alt](https://github.com/TaniyaAnshu29/Project_Linkedin/blob/06eb0b521ba6175cb25bff180aa0f7ef92c6cab2/Network%205.png)

## 9. Testing 
Each modeules can be testing using jest library for rendering the components and updating state variables.

### Unit Testing
- Correctly rendering:
   handleConnect to connect people on linkedin
   handleSaveBio to save the bio of linkedin user
   handleSaveJobPreferences to edit the job title and preferences of user
   likes -> increases likes correctly
   connections -> increases connection count

- Mock API calls from JSON files
  fetch("/people.json")
  fetch("/user.json")
  fetch("/posts.json")
  fetch("/jobs.json")
  
### Integration Testing
  using Navigation (useNavigate)
  Interactions between different components:
  ProfilePage interacting with Navbar
  HomePage interacting with Navbar 

## 10. Deployment:
### Prerequisites
- noje.js
- npm
- git installed
- netlify account

### Set up
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/TaniyaAnshu29/Project_Linkedin
git push -u origin 

### create build
- npm run build
- dist folder created

### Hosting
- folder uploading on GitHup repository 
- connect the repository in netlify
## 11. Conclusion
This project is a LinkedIn clone that replicates key features of the professional networking platform, offering navigation, job listings, user profiles, and networking functionalities. The login page includes sign-in options via Google, Apple, and email/password, with a password recovery feature. The navbar provides smooth navigation to Home, Jobs, Network, and Profile pages, along with a logout option. The home page features a user feed where posts, likes, comments, and shares are managed dynamically. The profile page allows users to edit their bio, update job preferences, and showcase their posts. The job listings section enables users to search, save, and view detailed job descriptions, while the networking page helps in building and managing professional connections. Data is fetched from JSON files, and local storage ensures persistence for likes, connections, and saved jobs. Implemented using React and React Router, this project delivers an interactive, scalable, and user-friendly experience.
## 12. References
- https://in.linkedin.com/
- https://www.npmjs.com/
- https://reactrouter.com/
- https://fontawesome.com/
## 13. Demo

