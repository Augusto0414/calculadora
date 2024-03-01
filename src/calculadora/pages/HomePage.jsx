import { useState } from "react";
import { ButonCalculadora } from "../components/ButonCalculadora"
import { DisplayPage } from "./DisplayPage"
export const HomePage = () => {
    const [clickValue, setclickValue] = useState('0');
    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    const operations = ["+", "-", "*", "/", "DEL"];
    return (
        <>
            <section className="container">
                <article className="container_calculadora">
                    <DisplayPage content={clickValue} />
                    <section className="options_menu">
                        <ButonCalculadora arrComponent={numbers} type="number"  setHandleClick={setclickValue} />
                        <ButonCalculadora arrComponent={operations} type="operation"  setHandleClick={setclickValue} />
                    </section>
                </article>
            </section>
        </>
    )
}
