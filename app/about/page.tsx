export default function About() {

    return (

        <div className="container">

            <h1 style={{
                fontSize:"40px",
                marginBottom:"30px"
            }}>
                About
            </h1>


            <div className="section">

                <p className="sectionText">
                    I'm a software engineer focused on building systems that solve real-world problems.
                    My work combines backend development, automation and AI integrations to create
                    scalable products and efficient workflows.
                </p>

                <p className="sectionText" style={{marginTop:"20px"}}>
                    I enjoy designing architectures that connect APIs, machine learning models,
                    databases and automation pipelines into reliable production systems.
                </p>

            </div>


            <div className="section">

                <h2 className="sectionTitle">
                    Engineering Focus
                </h2>

                <p className="sectionText">
                    Most of my projects revolve around building practical engineering systems:
                    automation pipelines, computer vision tools, AI-powered data extraction
                    workflows and backend platforms that integrate multiple technologies.
                </p>

                <p className="sectionText" style={{marginTop:"15px"}}>
                    I particularly enjoy working on systems that combine software engineering
                    with machine learning and automation.
                </p>

            </div>


            <div className="section">

                <h2 className="sectionTitle">
                    Tech Stack
                </h2>

                <div className="grid">

                    <div className="card">

                        <h3 style={{marginBottom:"10px"}}>
                            Backend
                        </h3>

                        <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                            <span className="tag">Python</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">Flask</span>
                            <span className="tag">REST APIs</span>
                        </div>

                    </div>


                    <div className="card">

                        <h3 style={{marginBottom:"10px"}}>
                            Frontend
                        </h3>

                        <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                            <span className="tag">React</span>
                            <span className="tag">Next.js</span>
                            <span className="tag">TypeScript</span>
                        </div>

                    </div>


                    <div className="card">

                        <h3 style={{marginBottom:"10px"}}>
                            AI / Data
                        </h3>

                        <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                            <span className="tag">Computer Vision</span>
                            <span className="tag">YOLO</span>
                            <span className="tag">LLM APIs</span>
                            <span className="tag">Rasa</span>
                            <span className="tag">Ollama</span>
                        </div>

                    </div>


                    <div className="card">

                        <h3 style={{marginBottom:"10px"}}>
                            Infrastructure
                        </h3>

                        <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                            <span className="tag">PostgreSQL</span>
                            <span className="tag">Railway</span>
                            <span className="tag">Automation</span>
                            <span className="tag">APIs</span>
                        </div>

                    </div>

                </div>

            </div>



            <div className="section">

                <h2 className="sectionTitle">
                    Current Interests
                </h2>

                <p className="sectionText">
                    I'm currently exploring systems that combine AI models with automation
                    and production workflows. I'm particularly interested in building tools
                    that extract structured data from unstructured sources, automate repetitive
                    processes and integrate machine learning into real business applications.
                </p>

            </div>



            <div className="section">

                <h2 className="sectionTitle">
                    Engineering Philosophy
                </h2>

                <p className="sectionText">
                    I believe good engineering focuses on solving real problems with
                    simple and reliable systems. I value clear architecture, pragmatic
                    solutions and building software that delivers measurable impact.
                </p>

            </div>


        </div>

    )

}