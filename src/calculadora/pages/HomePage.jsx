import { ButonCalculadora } from "../components/ButonCalculadora"

export const HomePage = () => {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const operations = ["+", "-", "*", "/", "DEL"];  
    return (
        <>
            <section className="container">
                <article className="container_calculadora">
                    <div className="display">
                        <span>2+1</span>
                    </div>
                    <section className="options_menu">
                    <ButonCalculadora arrNumber={numbers} type="number"/>
                    <ButonCalculadora arrNumber={operations} type="operation"/>    
                    </section>
                </article>
            </section>
        </>
    )
}
