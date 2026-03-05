export default function Contact() {

    return(

        <div className="container">

            <h1 style={{fontSize:"36px",marginBottom:"30px"}}>
                Work With Me
            </h1>

            <p className="sectionText">
                I'm currently open to remote opportunities and freelance
                collaborations related to backend development, AI systems
                and automation platforms.
            </p>


            <div className="card" style={{marginTop:"30px"}}>

                <h3>Email</h3>

                <p style={{marginTop:"10px"}}>

                    <a
                        href="mailto:dalperovich@fi.uba.ar"
                        style={{color:"#60a5fa"}}
                    >
                        dalperovich@fi.uba.ar
                    </a>

                </p>

            </div>


            <div className="card" style={{marginTop:"20px"}}>

                <h3>LinkedIn</h3>

                <p style={{marginTop:"10px"}}>

                    <a
                        href="https://www.linkedin.com/in/denisse-alperovich-930113370/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color:"#60a5fa"}}
                    >
                        LinkedIn
                    </a>

                </p>

            </div>

        </div>

    )

}