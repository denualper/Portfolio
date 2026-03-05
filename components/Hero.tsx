export default function Hero() {
    return (
        <section className="container">

            <h1 style={{
                fontSize: "42px",
                fontWeight: "bold",
                marginBottom: "20px"
            }}>
                AI & Fullstack Developer
            </h1>

            <p style={{
                fontSize: "20px",
                color: "#94a3b8",
                maxWidth: "700px"
            }}>
                I design and build intelligent systems combining
                Artificial Intelligence, Computer Vision, OCR automation,
                and modern web technologies.
            </p>

            <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
                <a href="/projects"
                   style={{
                       background: "#38bdf8",
                       color: "black",
                       padding: "12px 20px",
                       borderRadius: "8px"
                   }}>
                    View Projects
                </a>

                <a href="/contact"
                   style={{
                       border: "1px solid #38bdf8",
                       padding: "12px 20px",
                       borderRadius: "8px"
                   }}>
                    Contact
                </a>
            </div>

        </section>
    );
}