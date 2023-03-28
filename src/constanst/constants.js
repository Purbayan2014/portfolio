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
        name: "Golang",
        icon: golang,
    },
    {
        name: "Kotlin",
        icon: kotlin,
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
                name: "machine learning",
                color: "blue-text-gradient",
            },
            {
                name: "deep learning",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "web application",
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
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "deep learning",
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