import '../styles/routes/Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <div className="HomePop1">
                <div className="Pop1Txt">
                    <div className="Title">
                        <h1>Bienvenue chez votre partenaire informatique de confiance</h1>
                    </div>
                    <div className="Description">
                        <h2>Nous sommes dévoués à créer des solutions informatiques sur mesure qui répondent à vos besoins uniques. Avec une attention personnalisée, une écoute attentive et un engagement envers votre satisfaction, nous sommes là pour vous accompagner à chaque étape de votre projet. Découvrez comment nous pouvons transformer vos idées en succès numériques dès aujourd'hui </h2>
                    </div>
                </div>
                <div className="Pop1Btn">
                    <input type='button' id='ServicesBtn' value="Découvrir nos services"></input>
                </div>
            </div>
            <div className="HomePop2">

            </div>
            <div className="HomePop2">

            </div>
            <div className="HomePop2">

            </div>
            <div className="HomePop2">

            </div>
        </div>
    )
}

export default Home;