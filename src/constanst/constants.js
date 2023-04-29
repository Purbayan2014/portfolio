import {
    mobile,
    backend,
    creator,
    machine_learning_icon,
    networking,
    deep_learing,
    microsoft,
    telaverge,
    web,
    javascript,
    typescript,
    python,
    express_js,
    kubernetes,
    kotlin,
    golang,
    c,
    mysql,
    pytorch,
    tensorflow,
    flask,
    swagger,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    emotion,
    graphical,
    networking_proj,
    brainwavenet,
    plagarism,
    nextjs,
    jobquest,
    screensiren,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Applications Developement",
        icon: web,
    },
    {
        title: "Machine learning Web Applications",
        icon: machine_learning_icon,
    },
    {
        title: "Deep learning Web Applications",
        icon: deep_learing,
    },
    {
        title: "Network Protocol Stack Development",
        icon: networking,
    },
    
];

const technologies = [
    {
        name : "Python",
        icon : python
    },
    {
        name : "Tensorflow",
        icon : tensorflow,
    },
    {
        name : "Pytorch",
        icon : pytorch,
    },
    {
        name : "Flask",
        icon : flask,
    },
    {
        name : "Swagger",
        icon : swagger,
    },
    {
        name : "C++",
        icon : c
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Golang",
        icon: golang,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name : "Next JS",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    },
    {
        name: "Express JS",
        icon: express_js,
    },
    {
        name: "Mysql",
        icon: mysql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Research and Development Intern",
        company_name: "Telaverge Communications",
        icon: telaverge,
        iconBg: "#383E56",
        date: "August 2022 - October 2022",
        points: [
            "Worked on day to day basis on company’s Flagship product Regal on various backend API used for various microservices using Python.",
            "Completed Unit test cases by creating docker images and then tested them using various curl requests as per needed basis.",
            "Designed and studied API templates using Swagger.",
            "Created various API to query data from databases using MongoDB, Pymongo.",
            "Fixed issues regarding K8 clusters.",
            "Raised over 200 Bugfixed PR that were assigned to me and had it reviewed with my lead too.",
            "Attended daily scrum calls to perform code-review with my team lead and the core dev team.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Microsoft Future Ready Talent",
        icon: microsoft,
        iconBg: "#E6DEDD",
        date: "November 2021 - January 2022",
        points: [
            "Got trained on Microsoft Azure Cloud and its various web services",
            "Worked on sample ML Models using Azure Machine learning services and then created a Fake News Classifier Model using Azure Machine learning services",
            "Connected the Machine learning Model with my Python Web App by creating it as a Flask Rest API.",
            "Tested the model and got it reviewed with my team lead",
            "Attended daily scrum calls with my lead",
            "All code was reviewed, perfected, and pushed to production.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "BrainWaveNet Abstract Summarizer",
        description:
            "BrainWave Net is a high performance research Abstract Summarizer web application that is created on various tested" +
            "NLP deep learning models. This was solely created for the purpose such that research scientists and common folks" +
            "from various fields can get their research abstracts summarized in a very easy to read and understandable format" +
            "",
        tags: [
            {
                name: "Tensorflow",
                color: "blue-text-gradient",
            },
            {
                name: "Pytorch",
                color: "green-text-gradient",
            },
            {
                name: "Swagger",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "pink-text-gradient",
            },
            {
                name: "Flask",
                color: "blue-text-gradient",
            },
            {
                name: "NLP-/Transformers",
                color: "green-text-gradient",
            },
            {
                name: "React JS",
                color: "green-text-gradient",
            },
            {
                name: "Pandas",
                color: "pink-text-gradient",
            },
            {
                name: "Numpy",
                color: "pink-text-gradient",
            },
            {
                name: "Seaborn",
                color: "pink-text-gradient",
            },
            {
                name: "Plotly",
                color: "pink-text-gradient",
            },
        ],
        image: brainwavenet,
        source_code_link: "https://github.com/Purbayan2014/Sequential-text-classification-using-deep-sequence-modelling",
    },
    {
        name: "Audio Emotion Recognition System",
        description:
            "AER is a advanced speech recognition system is a web application that is capable of recognising emotions on real time" +
            "by removing significant audio errors from audio clips. It is created on a deep learning model called MLP(MultiLayer" +
            "Perceptron).It supports upto classifying four to five emotions till now.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "Google Colab",
                color: "green-text-gradient",
            },
            {
                name: "SKlearn",
                color: "pink-text-gradient",
            },
            {
                name: "Pandas",
                color: "pink-text-gradient",
            },
            {
                name: "Numpy",
                color: "pink-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "JS",
                color: "pink-text-gradient",
            },
        ],
        image: emotion,
        source_code_link: "https://github.com/Purbayan2014/Emotion-Classifier-AEC-CNN",
    },
    {
        name: "Pesudo IGP Protocol",
        description:
            "Pseudo IGP protocol is a prototype of a simplified ISIS protocol that is used as a control Plane for SPB"+
            "(Shortest-path-forwarding) algorithm in layer 2 topologies such as the Ethernet meshes, etc. This prototype is based"+
            "on CLI application created used C.It supports various modes to help and assist the developer such as the config, show,"+
            "debug mode.It also has noticeable features such as parsing and cooking of protocol packets. It also has a neighbor ship"+
            "management state machine and a link state database for managing link state packets.",
        tags: [
            {
                name: "c",
                color: "blue-text-gradient",
            },
            {
                name: "networking",
                color: "green-text-gradient",
            },
            {
                name: "console application",
                color: "pink-text-gradient",
            },
        ],
        image: networking_proj,
        source_code_link: "https://github.com/Purbayan2014/Pseudo-IGP-protocol",
    },
    {
        name: "Plagarism Checking API",
        description:
                "This state-of-the-art plagiarism checker API leverages the power of OpenAI API, Next.js, Redis, Prisma"+
                "Material UI, Tailwind CSS, and TypeScript to provide advanced text analysis and generate a comprehensive"+
                 "percentage score of textual similarity, ensuring the utmost precision and accuracy in detecting plagiarism.",
        tags: [
            {
                name: "Web API",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Next JS",
                color: "blue-text-gradient",
            },
            {
                name: "Prisma",
                color: "green-text-gradient",
            },
            {
                name: "Redis",
                color: "pink-text-gradient",
            },
            {
                name: "Postman",
                color: "blue-text-gradient",
            },
            {
                name: "Swagger",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: plagarism,
        source_code_link: "https://openapi-ts.vercel.app/",
    },
    {
        name: "Job Quest",
        description:
                "JobQuest is a job search app built using React Native for front-end development and Firebase for back-end development."+
                " It integrates the Jsearch API from Rapid API for real-time job posting updates and features multiple search tags and "+
                "filters, pagination support, and separate sections for fresher and professional jobs. With its clean and sleek UI, "+
                "JobQuest provides users with a seamless and efficient job search experience.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "React JS",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "api",
                color: "blue-text-gradient",
            },
            {
                name: "Postman",
                color: "blue-text-gradient",
            },
        ],
        image: jobquest,
        source_code_link: "https://github.com/Purbayan2014/Job-Quest",
    },
    {
        name: "Screen Siren",
        description:
                "ScreenSiren is a cutting-edge web application that lets users easily explore trending and popular TV shows and movies. " + 
                "Powered by Angular and PrimeNG components, ScreenSiren provides a sleek and intuitive interface for discovering new entertainment." + 
                "With comprehensive details on each show and movie, including videos, ScreenSiren makes it easy to stay up-to-date on your favorite " + 
                "content. And with robust search functionality, users can easily find TV shows and movies by name or genre. Showcase your passion for entertainment "+
                "and your skills as a developer with ScreenSiren on your resume today!",
        tags: [
            {
                name: "angular js",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "primeflex",
                color: "pink-text-gradient",
            },
            {
                name: "primeng",
                color: "pink-text-gradient",
            },
        ],
        image: screensiren,
        source_code_link: "https://purbayan2014.github.io/ScreenSiren2/",
    },
    {
        name: "Graphical Authentication System",
        description:
            "Graphical Authentication System is a python based tkinter application which is a working prototype to show that text"+
            "based password system can be replaced by image based authentication seamlessly without any issues.This prototype"+
            "has three different types of layers protection.Each layer is totally different and shows different ways of using images"+
            "to login into a system.",
        tags: [
            {
                name: "tkinter",
                color: "blue-text-gradient",
            },
            {
                name: "authentication/security",
                color: "green-text-gradient",
            },
            {
                name: "python gui",
                color: "pink-text-gradient",
            },
        ],
        image: graphical,
        source_code_link: "https://github.com/Purbayan2014/Graphical-authentication",
    },
];

export { services, technologies, experiences, testimonials, projects };