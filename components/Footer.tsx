export default function Footer(){

    return(

        <footer style={{
            borderTop:"1px solid #1e293b",
            marginTop:"80px"
        }}>

            <div style={{
                maxWidth:"1100px",
                margin:"auto",
                padding:"40px 20px",
                textAlign:"center",
                color:"#94a3b8"
            }}>

                <p>
                    © {new Date().getFullYear()} Denisse Alperovich
                </p>

                <p style={{marginTop:"10px"}}>
                    Fullstack Engineer • React • Node • AI Systems
                </p>

            </div>

        </footer>

    )

}