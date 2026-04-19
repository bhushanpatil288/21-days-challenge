import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import { Projects } from "./pages"

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Projects />} />
            </Routes>
        </Layout>
    )
}

export default App