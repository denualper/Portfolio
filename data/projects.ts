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
        slug: "enterprise-app-modernization",
        title: "Enterprise Application Modernization",
        description: "Modernizing enterprise workflows from Angular to Next.js with responsive interfaces, data tables, forms and REST API integrations.",
        overview: "An anonymized case study based on professional work modernizing enterprise web applications. My focus includes frontend architecture, component migration and integration with existing business services.",
        problem: "Existing Angular applications contain complex business workflows that need to be carried into a modern React and Next.js environment without disrupting established functionality.",
        solution: "I work on migrating interface functionality into reusable Next.js components, implementing forms, configurable filters and data tables while integrating existing REST APIs.",
        architecture: "The frontend uses Next.js, React and TypeScript, with reusable components and service integrations connecting the interface to existing backend APIs. The application handles business data, filtering, pagination and user interactions.",
        challenges: "Preserving business behavior during framework migration, managing component state and responsive layouts, and keeping filtering and pagination consistent with backend services.",
        results: "Implemented and migrated enterprise interface functionality, including data-driven views, filters and forms. This is an anonymized professional case study; production metrics and source code are not public.",
        stack: ["React", "Next.js", "TypeScript", "Angular", "REST APIs", "Responsive UI"],
        diagram: `User Interface (Next.js / React)
        │
        ▼
Reusable Components & State
        │
        ▼
API Integration Layer
        │
        ▼
Existing Backend Services`
    },
    {
        slug: "qr-management-system",
        title: "QR Management System",
        description: "Platform to generate, store and manage QR codes linked to clients, branches and services.",
        overview: "This system was designed for companies that perform field services and need a reliable way to identify locations and service records using QR codes. The platform allows generating, storing and managing QR codes associated with clients and branches while maintaining a centralized database.",
        problem: "Field service companies often rely on manual processes to identify service locations and track service history. This creates operational friction, data inconsistencies and difficulty retrieving information quickly.",
        solution: "I developed a QR management platform that allows generating unique QR codes linked to specific clients and service locations. The system stores all data in a relational database and provides tools to generate, search, download and manage QRs efficiently.",
        architecture: "The backend is built with Flask and connected to a PostgreSQL database hosted on Railway. The system manages relational data structures for clients, branches and QR codes. QR images are dynamically generated and can be retrieved or downloaded through the interface.",
        challenges: "Designing a relational structure capable of handling multiple branches per client while maintaining clear QR traceability. Another challenge was integrating QR generation with persistent storage and search functionality.",
        results: "The platform centralizes QR code records and supports generating, searching and downloading codes for client locations.",
        stack: ["Python", "Flask", "PostgreSQL", "Railway", "QR Generation"],
        diagram: `Client Interface
        │
        ▼
Flask Backend API
        │
        ▼
QR Generation Service
        │
        ▼
PostgreSQL Database (Railway)`
    },
    {
        slug: "ai-ocr-pipeline",
        title: "AI OCR Data Extraction Pipeline",
        description: "Pipeline that processes images and extracts structured information using local vision LLMs.",
        overview: "This project focuses on automating the extraction of structured data from images using local AI models. It processes image datasets and converts visual information into structured outputs that can be used for analysis or automation.",
        problem: "Many documents and images contain valuable information but require manual processing. Traditional OCR tools often struggle with complex layouts or contextual interpretation.",
        solution: "I built an AI processing pipeline that uses local vision models to interpret images and extract structured information automatically.",
        architecture: "The pipeline runs locally using Ollama to serve the llama3.2-vision model. Python scripts process image batches, send them to the model and structure the responses into usable data outputs.",
        challenges: "Handling batch processing efficiently while maintaining consistent structured outputs from LLM responses required careful prompt design and response validation.",
        results: "The pipeline produces structured outputs from input images and provides a foundation for automated document processing workflows.",
        stack: ["Python", "Ollama", "LLaMA Vision", "AI Processing"],
        diagram: `Image Dataset
        │
        ▼
Python Processing Pipeline
        │
        ▼
Ollama Vision Model
        │
        ▼
Structured Data Output`
    },
    {
        slug: "rasa-chatbot",
        title: "Conversational AI Chatbot",
        description: "Conversational assistant built with Rasa capable of understanding intents and managing dialogue flows.",
        overview: "This project focuses on building a conversational AI assistant capable of understanding user intent and responding dynamically through structured dialogue management.",
        problem: "Organizations often require automated systems capable of answering questions and guiding users through interactions without requiring human intervention.",
        solution: "I implemented a chatbot using the Rasa framework with custom intents, training data and dialogue flows.",
        architecture: "The chatbot uses Rasa's NLP pipeline to classify intents and manage conversations. Dialogue flows are defined through training data and stories.",
        challenges: "Designing robust intent classification and maintaining conversation context required iterative training and dataset refinement.",
        results: "The chatbot supports intent-driven conversations and structured dialogue workflows.",
        stack: ["Python", "Rasa", "NLP", "Machine Learning"],
        diagram: `User Message
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
Bot Response`
    },
    {
        slug: "vehicle-detection-ai",
        title: "Vehicle Detection AI System",
        description: "Computer vision system that detects vehicles and classifies their orientation.",
        overview: "This project focuses on building a computer vision pipeline capable of detecting vehicles in images and analyzing their orientation to generate structured traffic data.",
        problem: "Traffic analysis often requires manual annotation or expensive proprietary software.",
        solution: "I trained a YOLO model to detect vehicles and classify their orientation automatically.",
        architecture: "The system uses YOLO for object detection combined with OpenCV preprocessing. Python scripts process images and generate structured output data.",
        challenges: "Preparing training datasets and optimizing detection accuracy required experimentation with model parameters and dataset augmentation.",
        results: "The pipeline detects vehicles and produces structured classification outputs suitable for further traffic analysis.",
        stack: ["Python", "YOLO", "OpenCV", "Computer Vision"],
        diagram: `Input Image
        │
        ▼
OpenCV Preprocessing
        │
        ▼
YOLO Detection Model
        │
        ▼
Vehicle Classification Output`
    },
    {
        slug: "web-automation-system",
        title: "Web Automation & Data Extraction System",
        description: "Automation system that collects and processes data from web services and APIs.",
        overview: "This project focuses on automating repetitive workflows that require extracting information from external services and APIs.",
        problem: "Many workflows involve repetitive manual data extraction from websites or APIs.",
        solution: "I implemented automation scripts that collect, process and structure data automatically.",
        architecture: "Node.js scripts interact with external APIs and services, process the data and generate structured outputs.",
        challenges: "Handling unreliable external services and designing resilient automation pipelines required error handling and retry logic.",
        results: "The scripts collect and structure information from external services to support repeatable data-processing workflows.",
        stack: ["Node.js", "JavaScript", "APIs", "Automation"],
        diagram: `External Web Services
        │
        ▼
Node.js Automation Scripts
        │
        ▼
Data Processing
        │
        ▼
Structured Output`
    }
]
