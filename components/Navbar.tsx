import Link from "next/link";

export default function Navbar() {

    return (

        <nav style={{
            borderBottom: "1px solid #1e293b",
            padding: "20px 0"
        }}>

            <div style={{
                maxWidth: "1100px",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px"
            }}>

                <Link href="/" style={{fontWeight:"bold"}}>
                    Denisse Alperovich
                </Link>

                <div style={{display:"flex", gap:"25px"}}>

                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>

                </div>

            </div>

        </nav>

    )
}