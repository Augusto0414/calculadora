import { Route, Routes } from "react-router-dom"
import { HomePage } from "../calculadora/pages/HomePage"

export const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
    )
}
