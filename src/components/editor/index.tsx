// import React, { useState } from "react";

// const templates = [
//   {
//     id: "template_1",
//     name: "Template 1",
//     html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Modern Card-based UI</title>
//     <style>
//         :root {
//             --primary-color: #3498db;
//             --secondary-color: #2ecc71;
//             --text-color: #333;
//             --background-color: #f4f4f4;
//         }

//         body {
//             font-family: 'Arial', sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: var(--background-color);
//             color: var(--text-color);
//             line-height: 1.6;
//         }

//         header {
//             background-color: var(--primary-color);
//             color: white;
//             text-align: center;
//             padding: 1rem;
//         }

//         nav {
//             background-color: white;
//             padding: 1rem;
//             box-shadow: 0 2px 5px rgba(0,0,0,0.1);
//         }

//         nav ul {
//             list-style-type: none;
//             padding: 0;
//             display: flex;
//             justify-content: center;
//         }

//         nav ul li {
//             margin: 0 15px;
//         }

//         nav ul li a {
//             text-decoration: none;
//             color: var(--primary-color);
//             font-weight: bold;
//             transition: color 0.3s ease;
//         }

//         nav ul li a:hover {
//             color: var(--secondary-color);
//         }

//         main {
//             max-width: 1200px;
//             margin: 2rem auto;
//             padding: 0 2rem;
//         }

//         .card-container {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: space-between;
//         }

//         .card {
//             background-color: white;
//             border-radius: 8px;
//             box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//             margin-bottom: 2rem;
//             overflow: hidden;
//             transition: transform 0.3s ease;
//             width: calc(33% - 1rem);
//         }

//         .card:hover {
//             transform: translateY(-5px);
//         }

//         .card img {
//             width: 100%;
//             height: 200px;
//             object-fit: cover;
//         }

//         .card-content {
//             padding: 1.5rem;
//         }

//         .card-content h3 {
//             margin-top: 0;
//             color: var(--primary-color);
//         }

//         footer {
//             background-color: var(--primary-color);
//             color: white;
//             text-align: center;
//             padding: 1rem;
//             margin-top: 2rem;
//         }

//         @media (max-width: 768px) {
//             .card {
//                 width: 100%;
//             }
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <h1>Modern Card-based UI</h1>
//     </header>
//     <nav>
//         <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>
//     </nav>
//     <main>
//         <div class="card-container">
//             <div class="card">
//                 <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 1">
//                 <div class="card-content">
//                     <h3>Project 1</h3>
//                     <p>This is a description of Project 1. It was an exciting endeavor that showcased our skills in web development.</p>
//                 </div>
//             </div>
//             <div class="card">
//                 <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 2">
//                 <div class="card-content">
//                     <h3>Project 2</h3>
//                     <p>Project 2 was a challenging mobile app development project that pushed our creativity to new limits.</p>
//                 </div>
//             </div>
//             <div class="card">
//                 <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 3">
//                 <div class="card-content">
//                     <h3>Project 3</h3>
//                     <p>For Project 3, we created a robust backend system that could handle millions of requests per second.</p>
//                 </div>
//             </div>
//         </div>
//     </main>
//     <footer>
//         <p>&copy; 2024 Modern Card-based UI. All rights reserved.</p>
//     </footer>
// </body>
// </html>`,
//   },
//   {
//     id: "template_2",
//     name: "Template 2",
//     html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             margin: 0;
//             padding: 0;
//         }
//         header {
//             background-color: #333;
//             color: #fff;
//             text-align: center;
//             padding: 1rem;
//         }
//         nav {
//             background-color: #f4f4f4;
//             padding: 0.5rem;
//         }
//         nav ul {
//             list-style-type: none;
//             padding: 0;
//         }
//         nav ul li {
//             display: inline;
//             margin-right: 10px;
//         }
//         nav ul li a {
//             text-decoration: none;
//             color: #333;
//         }
//         main {
//             padding: 20px;
//         }
//         footer {
//             background-color: #333;
//             color: #fff;
//             text-align: center;
//             padding: 1rem;
//             position: fixed;
//             bottom: 0;
//             width: 100%;
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <h1>Welcome to My Website</h1>
//     </header>

//     <nav>
//         <ul>
//             <li><a>Home</a></li>
//             <li><a >About</a></li>
//             <li><a>Services</a></li>
//             <li><a>Contact</a></li>
//         </ul>
//     </nav>

//     <main>
//         <h2>About Us</h2>
//         <p>This is a sample paragraph about your company or website. Replace this with your own content.</p>

//         <h2>Our Services</h2>
//         <ul>
//             <li>Service 1</li>
//             <li>Service 2</li>
//             <li>Service 3</li>
//         </ul>
//     </main>

//     <footer>
//         <p>&copy; 2024 My Website. All rights reserved.</p>
//     </footer>
// </body>
// </html>`,
//   },
//   {
//     id: "template_3",
//     name: "Template 3",
//     html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Modern Web Page</title>
//     <style>
//         :root {
//             --primary-color: #3498DB;
//             --secondary-color: #2ECC71;
//             --text-color: #333;
//             --bg-color: #F4F4F4;
//         }
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }
//         body {
//             font-family: 'Arial', sans-serif;
//             line-height: 1.6;
//             color: var(--text-color);
//             background-color: var(--bg-color);
//         }
//         .container {
//             width: 80%;
//             margin: 0 auto;
//             overflow: hidden;
//         }
//         header {
//             background-color: var(--primary-color);
//             color: white;
//             padding: 1rem 0;
//             position: fixed;
//             width: 100%;
//             top: 0;
//             z-index: 1000;
//         }
//         nav {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//         }
//         .logo {
//             font-size: 1.5rem;
//             font-weight: bold;
//         }
//         .nav-links {
//             display: flex;
//             list-style: none;
//         }
//         .nav-links li {
//             margin-left: 1rem;
//         }
//         .nav-links a {
//             color: white;
//             text-decoration: none;
//             transition: color 0.3s ease;
//         }
//         .nav-links a:hover {
//             color: var(--secondary-color);
//         }
//         .hero {
//             background-image: url('/api/placeholder/1200/600');
//             background-size: cover;
//             background-position: center;
//             height: 100vh;
//             display: flex;
//             align-items: center;
//             text-align: center;
//             color: white;
//         }
//         .hero-content {
//             background-color: rgba(0, 0, 0, 0.5);
//             padding: 2rem;
//             border-radius: 10px;
//         }
//         .hero h1 {
//             font-size: 3rem;
//             margin-bottom: 1rem;
//         }
//         .btn {
//             display: inline-block;
//             background-color: var(--secondary-color);
//             color: white;
//             padding: 0.5rem 1rem;
//             text-decoration: none;
//             border-radius: 5px;
//             transition: background-color 0.3s ease;
//         }
//         .btn:hover {
//             background-color: #27AE60;
//         }
//         .features {
//             padding: 4rem 0;
//         }
//         .features h2 {
//             text-align: center;
//             margin-bottom: 2rem;
//         }
//         .feature-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 2rem;
//         }
//         .feature {
//             background-color: white;
//             padding: 1.5rem;
//             border-radius: 10px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             transition: transform 0.3s ease;
//         }
//         .feature:hover {
//             transform: translateY(-5px);
//         }
//         .feature h3 {
//             margin-bottom: 1rem;
//         }
//         footer {
//             background-color: var(--primary-color);
//             color: white;
//             text-align: center;
//             padding: 1rem 0;
//         }
//         @media (max-width: 768px) {
//             .container {
//                 width: 90%;
//             }
//             .nav-links {
//                 display: none;
//             }
//             .hero h1 {
//                 font-size: 2rem;
//             }
//         }
//     </style>
// </head>
// <body>
//     <header>
//         <nav class="container">
//             <div class="logo" id="modern-template-logo">Your Logo</div>
//             <ul class="nav-links">
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#features">Features</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </nav>
//     </header>
//     <main>
//         <section id="home" class="hero">
//             <div class="container">
//                 <div class="hero-content">
//                     <h1 id="modern-template-heading">Welcome to Our Modern Web Page</h1>
//                     <p id="modern-template-subheading">Discover amazing features and services tailored for you.</p>
//                     <a href="#features" class="btn" id="modern-template-cta">Learn More</a>
//                 </div>
//             </div>
//         </section>
//         <section id="features" class="features">
//             <div class="container">
//                 <h2>Our Features</h2>
//                 <div class="feature-grid">
//                     <div class="feature">
//                         <h3 id="modern-template-feature1-title">Feature 1</h3>
//                         <p id="modern-template-feature1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
//                     <div class="feature">
//                         <h3 id="modern-template-feature2-title">Feature 2</h3>
//                         <p id="modern-template-feature2-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                     </div>
//                     <div class="feature">
//                         <h3 id="modern-template-feature3-title">Feature 3</h3>
//                         <p id="modern-template-feature3-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </main>
//     <footer>
//         <div class="container">
//             <p id="modern-template-footer">&copy; 2023 Your Company Name. All rights reserved.</p>
//         </div>
//     </footer>
//     <script>
//         // Smooth scrolling for anchor links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 document.querySelector(this.getAttribute('href')).scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             });
//         });
//     </script>
// </body>
// </html>`,
//   },
// ];

// const TemplateDisplay: React.FC = () => {
//   const [selectedTemplate, setSelectedTemplate] = useState<string>(
//     templates[0].id
//   );

//   const getTemplateHtml = (templateId: string) => {
//     const template = templates.find((t) => t.id === templateId);
//     return template ? template.html : "";
//   };

//   const handleTemplateChange = (templateId: string) => {
//     setSelectedTemplate(templateId);
//   };

//   const downloadHtmlFile = () => {
//     const htmlContent = getTemplateHtml(selectedTemplate);
//     const blob = new Blob([htmlContent], { type: "text/html" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "website.html";
//     link.click();
//   };

//   return (
//     <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
//       <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
//         <div className="flex items-center gap-2">
//           <div className="text-xl font-bold ">Website Builder</div>
//         </div>
//         <div>
//           <button
//             onClick={() => downloadHtmlFile()}
//             className="px-3 py-2 bg-blue-700 rounded-md"
//           >
//             Export
//           </button>
//         </div>
//       </div>

//       <div className="flex-grow flex">
//         {/* Sidebar */}
//         <div className="w-1/6 bg-gray-950 p-4">
//           <h2 className="text-xl font-bold">Core Elements</h2>
//           <div className="flex-col w-10 space-y-3 mt-2 ">
//             {templates.map((template) => (
//               <button
//                 key={template.id}
//                 onClick={() => handleTemplateChange(template.id)}
//                 className="bg-gray-900 text-white hover:text-blue-600 cursor-pointer p-4 rounded-lg border hover:border-blue-600"
//               >
//                 {template.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-grow bg-gray-800">
//           <iframe
//             className="w-full h-full bg-white"
//             title="Template Preview"
//             srcDoc={getTemplateHtml(selectedTemplate)}
//           />
//         </div>

//         {/* Properties Panel */}
//         <div className="w-1/6 p-4 bg-gray-950">
//           <h3 className="text-xl font-bold">Properties</h3>
//           <p>Modify content:</p>
//           {/* Additional properties can be added here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemplateDisplay;

/***new */
import React, { useState, useRef, useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css"; // Import GrapesJS styles

const templates = [
  {
    id: "template_1",
    name: "Template 1",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Card-based UI</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --background-color: #f4f4f4;
        }

        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
        }

        nav {
            background-color: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: bold;
            transition: color 0.3s ease;
        }

        nav ul li a:hover {
            color: var(--secondary-color);
        }

        main {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            overflow: hidden;
            transition: transform 0.3s ease;
            width: calc(33% - 1rem);
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .card-content {
            padding: 1.5rem;
        }

        .card-content h3 {
            margin-top: 0;
            color: var(--primary-color);
        }

        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }

        @media (max-width: 768px) {
            .card {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Modern Card-based UI</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <div class="card-container">
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 1">
                <div class="card-content">
                    <h3>Project 1</h3>
                    <p>This is a description of Project 1. It was an exciting endeavor that showcased our skills in web development.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 2">
                <div class="card-content">
                    <h3>Project 2</h3>
                    <p>Project 2 was a challenging mobile app development project that pushed our creativity to new limits.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Project 3">
                <div class="card-content">
                    <h3>Project 3</h3>
                    <p>For Project 3, we created a robust backend system that could handle millions of requests per second.</p>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Modern Card-based UI. All rights reserved.</p>
    </footer>
</body>
</html>`,
  },
  {
    id: "template_2",
    name: "Template 2",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
        }
        nav {
            background-color: #f4f4f4;
            padding: 0.5rem;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin-right: 10px;
        }
        nav ul li a {
            text-decoration: none;
            color: #333;
        }
        main {
            padding: 20px;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>

    <nav>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>

    <main>
        <h2>About Us</h2>
        <p>This is a sample paragraph about your company or website. Replace this with your own content.</p>

        <h2>Our Services</h2>
        <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
        </ul>
    </main>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`,
  },
  {
    id: "template_3",
    name: "Template 3",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Web Page</title>
    <style>
        :root {
            --primary-color: #3498DB;
            --secondary-color: #2ECC71;
            --text-color: #333;
            --bg-color: #F4F4F4;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
        }
        header {
            background: var(--primary-color);
            color: #fff;
            padding: 1rem;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #fff;
            padding: 1rem;
            border-bottom: 1px solid #ddd;
        }
        nav a {
            margin: 0 1rem;
            color: var(--primary-color);
            text-decoration: none;
        }
        main {
            padding: 2rem;
        }
        footer {
            background: var(--primary-color);
            color: #fff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Modern Web Page</h1>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    <main>
        <h2>Welcome to the Modern Web Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna id ligula facilisis, eget dictum sem facilisis.</p>
    </main>
    <footer>
        <p>&copy; 2024 Modern Web Page. All rights reserved.</p>
    </footer>
</body>
</html>`,
  },
];

const TemplateDisplay: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>(
    templates[0].id
  );
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = grapesjs.init({
        container: editorRef.current,
        fromElement: true,
        height: "100%",
        width: "auto",
        storageManager: false,
        panels: { defaults: [] }, // Customize the panels if needed
        // Other GrapesJS options here
      });

      // Set the template HTML
      editor.setComponents(getTemplateHtml(selectedTemplate));
      editor.setStyle(getTemplateStyles(selectedTemplate));
    }
  }, [selectedTemplate]);

  const getTemplateHtml = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    return template ? template.html : "";
  };

  const getTemplateStyles = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      const doc = new DOMParser().parseFromString(template.html, "text/html");
      const styles = Array.from(doc.querySelectorAll("style"))
        .map((style) => style.innerHTML)
        .join("\n");
      return styles;
    }
    return "";
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const downloadHtmlFile = () => {
    const htmlContent = getTemplateHtml(selectedTemplate);
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "website.html";
    link.click();
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      <div className="w-full p-2 bg-gray-950 flex gap-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">Website Builder</div>
        </div>
        <div>
          <button
            onClick={() => downloadHtmlFile()}
            className="px-3 py-2 bg-blue-700 rounded-md"
          >
            Export
          </button>
        </div>
      </div>

      <div className="flex-grow flex">
        {/* Sidebar */}
        <div className="w-1/6 bg-gray-950 p-4">
          <h2 className="text-xl font-bold">Core Elements</h2>
          <div className="flex-col w-10 space-y-3 mt-2">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateChange(template.id)}
                className="bg-gray-900 text-white hover:text-blue-600 cursor-pointer p-4 rounded-lg border hover:border-blue-600"
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow bg-gray-800">
          <div className="w-full h-full" ref={editorRef} />
        </div>

        {/* Properties Panel */}
      </div>
    </div>
  );
};

export default TemplateDisplay;
