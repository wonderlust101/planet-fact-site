import Planet from "@/pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const basename = import.meta.env.BASE_URL;

function App() {
    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Navigate to="/mercury" replace />} />
                <Route path=":planet" element={<Planet/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;