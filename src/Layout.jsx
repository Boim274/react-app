import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{ paddingBottom: "1rem" }}>
                <ul style={{
                    listStyle: "none",
                    margin: "0",
                    padding: "0",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem"
                }}>
                    <li>
                        <Link to="/" style={{
                            textDecoration: "none",
                            color: "blue",
                            transition: "color 0.3s" // Smooth transition for hover
                        }}
                        onMouseEnter={(e) => e.target.style.color = "black"}
                        onMouseLeave={(e) => e.target.style.color = "blue"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cases" style={{
                            textDecoration: "none",
                            color: "blue",
                            transition: "color 0.3s"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "black"}
                        onMouseLeave={(e) => e.target.style.color = "blue"}>
                            Study Cases
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" style={{
                            textDecoration: "none",
                            color: "blue",
                            transition: "color 0.3s"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "black"}
                        onMouseLeave={(e) => e.target.style.color = "blue"}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
