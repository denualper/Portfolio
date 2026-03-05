export interface Project {
    slug: string
    title: string
    description: string
    overview: string
    problem: string
    solution: string
    architecture: string
    challenges: string
    results: string
    stack: string[]
    diagram?: string
}

export const projects: Project[] = [

    {
        slug: "qr-management-system",

        title: "QR Management System",

        description:
            "Platform to generate, store and manage QR codes linked to clients, branches and services.",

        overview:
            "This system was designed for companies that perform field services and need a reliable way to identify locations and service records using QR codes. The platform allows generating, storing and managing QR codes associated with clients and branches while maintaining a centralized database.",

        problem:
            "Field service companies often rely on manual processes to identify service locations and track service history. This creates operational friction, data inconsistencies and difficulty retrieving information quickly.",

        solution:
            "I developed a QR management platform that allows generating unique QR codes linked to specific clients and service locations. The system stores all data in a relational database and provides tools to generate, search, download and manage QRs efficiently.",

        architecture:
            "The backend is built with Flask and connected to a PostgreSQL database hosted on Railway. The system manages relational data structures for clients, branches and QR codes. QR images are dynamically generated and can be retrieved or downloaded through the interface.",

        challenges:
            "Designing a relational structure capable of handling multiple branches per client while maintaining clear QR traceability. Another challenge was integrating QR generation with persistent storage and search functionality.",

        results:
            "The system provides a scalable way to manage service identification through QR codes and simplifies operational workflows for field service teams.",

        stack: [
            "Python",
            "Flask",
            "PostgreSQL",
            "Railway",
            "QR Generation"
        ],

        diagram: `
Client Interface
        │
        ▼
Flask Backend API
        │
        ▼
QR Generation Service
        │
        ▼
PostgreSQL Database (Railway)
`
    },

    {
        slug: "ai-ocr-pipeline",

        title: "AI OCR Data Extraction Pipeline",

        description:
            "Pipeline that processes images and extracts structured information using local vision LLMs.",

        overview:
            "This project focuses on automating the extraction of structured data from images using local AI models. It processes image datasets and converts visual information into structured outputs that can be used for analysis or automation.",

        problem:
            "Many documents and images contain valuable information but require manual processing. Traditional OCR tools often struggle with complex layouts or contextual interpretation.",

        solution:
            "I built an AI processing pipeline that uses local vision models to interpret images and extract structured information automatically.",

        architecture:
            "The pipeline runs locally using Ollama to serve the llama3.2-vision model. Python scripts process image batches, send them to the model and structure the responses into usable data outputs.",

        challenges:
            "Handling batch processing efficiently while maintaining consistent structured outputs from LLM responses required careful prompt design and response validation.",

        results:
            "The system significantly reduces manual document processing and enables automated workflows based on extracted visual data.",

        stack: [
            "Python",
            "Ollama",
            "LLaMA Vision",
            "AI Processing"
        ],

        diagram: `
Image Dataset
        │
        ▼
Python Processing Pipeline
        │
        ▼
Ollama Vision Model
        │
        ▼
Structured Data Output
`
    },

    {
        slug: "rasa-chatbot",

        title: "Conversational AI Chatbot",

        description:
            "Conversational assistant built with Rasa capable of understanding intents and managing dialogue flows.",

        overview:
            "This project focuses on building a conversational AI assistant capable of understanding user intent and responding dynamically through structured dialogue management.",

        problem:
            "Organizations often require automated systems capable of answering questions and guiding users through interactions without requiring human intervention.",

        solution:
            "I implemented a chatbot using the Rasa framework with custom intents, training data and dialogue flows.",

        architecture:
            "The chatbot uses Rasa's NLP pipeline to classify intents and manage conversations. Dialogue flows are defined through training data and stories.",

        challenges:
            "Designing robust intent classification and maintaining conversation context required iterative training and dataset refinement.",

        results:
            "The chatbot can automate conversational workflows and handle structured user interactions efficiently.",

        stack: [
            "Python",
            "Rasa",
            "NLP",
            "Machine Learning"
        ],

        diagram: `
User Message
        │
        ▼
Rasa NLP Pipeline
        │
        ▼
Intent Classification
        │
        ▼
Dialogue Manager
        │
        ▼
Bot Response
`
    },

    {
        slug: "vehicle-detection-ai",

        title: "Vehicle Detection AI System",

        description:
            "Computer vision system that detects vehicles and classifies their orientation.",

        overview:
            "This project focuses on building a computer vision pipeline capable of detecting vehicles in images and analyzing their orientation to generate structured traffic data.",

        problem:
            "Traffic analysis often requires manual annotation or expensive proprietary software.",

        solution:
            "I trained a YOLO model to detect vehicles and classify their orientation automatically.",

        architecture:
            "The system uses YOLO for object detection combined with OpenCV preprocessing. Python scripts process images and generate structured output data.",

        challenges:
            "Preparing training datasets and optimizing detection accuracy required experimentation with model parameters and dataset augmentation.",

        results:
            "The system enables automated vehicle detection and can be integrated into traffic monitoring pipelines.",

        stack: [
            "Python",
            "YOLO",
            "OpenCV",
            "Computer Vision"
        ],

        diagram: `
Input Image
        │
        ▼
OpenCV Preprocessing
        │
        ▼
YOLO Detection Model
        │
        ▼
Vehicle Classification Output
`
    },

    {
        slug: "web-automation-system",

        title: "Web Automation & Data Extraction System",

        description:
            "Automation system that collects and processes data from web services and APIs.",

        overview:
            "This project focuses on automating repetitive workflows that require extracting information from external services and APIs.",

        problem:
            "Many workflows involve repetitive manual data extraction from websites or APIs.",

        solution:
            "I implemented automation scripts that collect, process and structure data automatically.",

        architecture:
            "Node.js scripts interact with external APIs and services, process the data and generate structured outputs.",

        challenges:
            "Handling unreliable external services and designing resilient automation pipelines required error handling and retry logic.",

        results:
            "The system automates data extraction workflows and significantly reduces manual effort.",

        stack: [
            "Node.js",
            "JavaScript",
            "APIs",
            "Automation"
        ],

        diagram: `
External Web Services
        │
        ▼
Node.js Automation Scripts
        │
        ▼
Data Processing
        │
        ▼
Structured Output
`
    }

]