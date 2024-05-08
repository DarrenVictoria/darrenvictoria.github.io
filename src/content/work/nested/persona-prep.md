---
title: Persona Prep - CV Generator & Mock Interview Simulator
publishDate: 2024-05-08 00:00:00
img: /assets/projects/personaprep/PersonaPrepHomepage.png
img_alt: Homepage to PersonaPrep
description: |
  3 in 1 Application with a CV Generator, AI Interview Simulator and Corporate Analytical Dashboard
tags:
  - React
  - AI APIs
  - Firebase
  - Fireauth
---

# PersonaPrep

Persona Prep is a comprehensive platform designed to assist undergraduates and recent graduates in creating professional, well-structured CVs and preparing for corporate interviews. The project aims to bridge the gap between academic qualifications and the expectations of the corporate world, ultimately enhancing the employability and career prospects of aspiring candidates.

## Features

- **- In-App Profile Management**: Users can maintain their individual information, including CVs, academic skills, certificates, and qualifications, within the application.

- **- CV Generator**: Persona Prep enables users to create competitive and complete CVs adhering to current corporate trends and standards.

- **- Job Skill Analysis**: Users can understand the required set of skills for specific job roles by analyzing their hard skills, technical skills, and soft skills, ensuring a better match with job requirements.

- **- Resume Template Bank**: A collection of resume templates is available, allowing users to enhance their CV presentation and competitiveness in the job market.

- **- AI-powered Interview Simulator**: An advanced interview simulation feature leverages artificial intelligence to provide dynamic and realistic mock interviews, boosting users' confidence and preparation.

- **- Interview Question Library**: Users can access a customized bank of interview questions relevant to their desired industry, further enhancing their preparedness.

- **- Data-Driven Insights**: Persona Prep provides data-driven insights to the career guidance unit (NFORCE) of NSBM Green University, enabling comprehensive analysis and recommendations for suitable career opportunities.

## Technologies

### Frontend

- **- React.js**: A modern JavaScript library for building user interfaces, providing a modular and reusable component-based architecture.

- **- Material-UI**: A popular React UI framework for creating visually appealing and responsive user interfaces.

- **- Asynchronous Operations**: Persona Prep employs asynchronous functions and techniques (e.g., async/await) for efficient data fetching and API referencing without blocking the UI.

- **- React State Management**: The state management capabilities of React facilitate efficient communication between components and real-time storage of user data.

### Backend

- **- Firebase Functions**: A serverless backend solution that handles authentication processes, data storage, and retrieval.

- **- Cloud Firestore**: A NoSQL document database that stores user data, CV details, and interview simulations, ensuring real-time data updates.

- **- Firebase Storage Bucket**: A secure and scalable storage solution for storing images and documents related to user profiles and CVs.

### AI Integration

- **- OpenAI API**: Utilized for generating summary statements and answering questions, enhancing user interactions and experiences.

- **- Whisper AI API**: Transcribes words during mock interviews within the Interview Simulator, enabling accurate recording and analysis of user responses.

- **- Eleven Labs API**: Provides realistic text-to-speech functionality, enhancing the immersive experience of the AI-powered Interview Simulator.

### Testing and Deployment

- **- Jest and React Testing Library**: Used for unit testing React components, ensuring individual components function correctly.

- **- Integration Testing**: Employed to assess the interaction and compatibility between integrated components.

- **- Performance Testing**: Conducted to evaluate the platform's responsiveness, speed, and resource utilization under varying conditions.

- **- Continuous Integration/Continuous Deployment (CI/CD)**: Automated build, testing, and deployment processes for the frontend and Firebase functions, ensuring consistency and reliability.

  
## Project Evidence 

### Index Page

- The index page the heart of the PersonaPrep application with key redirects to all the pages within <br><br>
![Index Page](/assets/projects/personaprep/PersonaPrepHomepage.png)

### AI Mock Interview Simulator

- The users are able to experience realistic practices interview sessions with customizable scenarios based on the job role and difficulty level. Additionally transcripts of the conducted interviews are also provided for the respective user. <br><br>
![AI Mock Interview Simulator](/assets/projects/personaprep/AIMockInterviewSimulator.png)

### Final CV Generated

- The final CV generated for the user in Web format and also we give the ability to export it in PDF format too allowing for easy carryon.<br><br>
![Final Generated CV](/assets/projects/personaprep/FinalCVGenerated.png)

### Template Selection
Allowing the Users creative side our allowing him/her to select from the plethora of templates and customize colors , fonts and styling based on preferences <br><br>
![Template Selection](/assets/projects/personaprep/TemplateSelection.png)

### Dashboard and Analytics for NForce
All data and numbers crunched in order for the NForce of NSBM to get an idea using technologies such as æcharts for ReactJS <br><br>
![Dashboard Analytics](/assets/projects/personaprep/dashboard_analytics.png)

### AI Summary Generator
An AI powered masterpiece powered by GPT 3.5 in order to create creative and unique Summarys on statements based off a users entered data perfected and crafted using guard rails <br><br>
![AI Summary Generator](/assets/projects/personaprep/AISummaryGenerator.png)

### User Data collection Form Pages <br>

![Form Pages](/assets/projects/personaprep/data_form_pages.png)

