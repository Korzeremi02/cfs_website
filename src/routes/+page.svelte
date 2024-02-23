<script>
    import Logo from '../assets/codeforge.png';
    import Dev from '../assets/dev.png';

    // @ts-ignore
    /**
     * @type {HTMLElement}
     */
    let Pop3Section;

    function scrollToPop3() {
        if (Pop3Section) {
            Pop3Section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    
    h1 { 
        margin: 0; 
        font-family: 'Montserrat', sans-serif; 
        font-weight: 700; 
        font-size: 6vh; 
        color: #FFFFFF;
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 4vh;
        margin: 0;
        color: #FFFFFF;
    }
    h3 { 
        font-family: 'IBM Plex Mono'; 
        font-weight: 400; 
        font-size: 2vh; 
        color: #FFFFFF;
    }
    .App { 
        height: 100vh; 
        width: 100vw; 
        background-color: #FFFFFF; 
        position: absolute; 
        top: 0; 
        left: 0; 
        overflow-y: scroll; 
        overflow-x: hidden; 
    }
    header { 
        height: 7vh; 
        width: 100vw; 
    }
    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 7vh; 
        width: 100vw; 
        background-color: #2b2b2b; 
        display: flex; 
        justify-content: space-between; 
        z-index: 5;
    }
    .NavLogo { 
        height: 100%; 
        width: 25vw; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
    }
    #NavLogo { 
        height: 90%; 
        width: auto; 
    }
    .NavButtons { 
        height: 100%; 
        width: 50vw; 
        display: flex; 
        align-items: center; 
        justify-content: space-evenly; 
    }
    #NavSingleBtn {
        text-decoration: none; 
        color: #FFFFFF; 
        font-size: 2.5vh; 
        opacity: 0.90; 
        font-family: 'IBM Plex Mono'; 
    }
    article { 
        height: auto; 
        width: 100vw; 
    }
    /* section {  } */
    .Pop1 { 
        height: 93vh; 
        width: 100vw; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background-image: url('../assets/dev.png');
        background-size: cover;
        background-position: center; 
    }
    .Pop1::before {
        content: '';
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(5px); 
        z-index: 1; 
    }
    .Pop1Infos { 
        position: absolute;;
        z-index: 2;
        height: 30vh; 
        width: 90vw; 
        display: flex; 
        flex-direction: column; 
        justify-content: space-between; 
    }
    #ScrollToPop3 { 
        width: 15vw; 
        height: 6vh; 
        border: 1px solid #ffffff;
        background-color: #5f50502e;
        color: #FFFFFF;
        border-radius: 0.5vh;
        font-family: 'IBM Plex Mono';
        font-weight: 600;
    }
    #ScrollToPop3:hover {
        cursor: pointer;
    }
    .Pop2 {
        height: 80vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/person.jpg');
        background-size: cover;
        background-position: center; 
    }
    .Pop2::before {
        content: '';
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(15px); 
        z-index: 1; 
    }
    .Pop2Infos {
        position: absolute;
        height: 70vh;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 2;
    }
    .Pop3 { 
        height: 100vh; 
        width: 100vw; 
        background-color: #ffffff; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Pop3Infos {
        margin-top: 10vh;
        height: 90vh; 
        width: 90vw; 
        display: flex; 
        flex-direction: column; 
        justify-content: space-around; 
    }
    .Pop3Infos > h2 {
        color: #000000;
    }
    .Pop3Infos > .Pop3List {
        height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .Pop3Infos > .Pop3List > h3 {
        color: #000000;
        font-size: 2.7vh;
        margin: 0;
    }
    #RDVBtn {
        width: 15vw; 
        height: 5vh; 
        border: 1px solid #000000;
        color: #000000;
        border-radius: 0.5vh;
        font-family: 'IBM Plex Mono';
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    footer { 
        height: 20vh; 
        width: 100vw; 
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .FooterInfos {
        height: 100%;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<div class="App">
    <header>
        <nav>
            <div class="NavLogo">
                <img src={Logo} id="NavLogo" alt="CodeForgeLogo">
            </div>
            <div class="NavButtons">
                <a href="/" id="NavSingleBtn">Accueil</a>
                <a href="/Projets" id="NavSingleBtn">Projets</a>
                <a href="/RDV" id="NavSingleBtn">Prendre RDV</a>
                <a href="/Contact" id="NavSingleBtn">Nous contacter</a>
            </div>
        </nav>
    </header>
    <article>
        <section class="Pop1">
            <div class="Pop1Infos">
                <h1>Bienvenue chez votre partenaire informatique de confiance</h1>
                <h3>Nous sommes dévoués à créer des solutions informatiques sur mesure qui répondent à vos besoins uniques. Avec une attention personnalisée, une écoute attentive et un engagement envers votre satisfaction, nous sommes là pour vous accompagner à chaque étape de votre projet. Découvrez comment nous pouvons transformer vos idées en succès numériques dès aujourd'hui</h3>
                <button id="ScrollToPop3" on:click={scrollToPop3}>Découvrir nos services</button>
            </div>
        </section>
        <section class="Pop2">
            <div class="Pop2Infos">
                <h1>Découvrez...</h1>
                <h2>Un savoir-faire partagé</h2>
                <h3>Profitez d'un savoir-faire approfondi et partagé avec nos experts, qui sont déterminés à vous guider à travers chaque étape de votre parcours.</h3>
                <h2>Une expérience personnalisée</h2>
                <h3>Appréciez une expérience entièrement personnalisée, où chaque interaction avec notre service est adaptée à vos besoins individuels et à vos préférences.</h3>
                <h2>Une satisfaction visée</h2>
                <h3>Nous nous engageons à viser la satisfaction de nos clients à chaque point de contact, en offrant des solutions efficaces et en dépassant les attentes.</h3>
                <h2>Une structure francaise</h2>
            </div>
        </section>
        <section class="Pop3" bind:this={Pop3Section}>
            <div class="Pop3Infos">
                <h2>Une multitude de services... pour répondre à une multitude de besoins</h2>
                <div class="Pop3List">
                    <h3>- Réalisation de maquettes UI / UX pour sites WEB & Apps</h3>
                    <h3>- Développement sites WEB Front: HTML, CSS, JS, Frameworks JS (React, SVELTE, VueJS)</h3>
                    <h3>- Développement sites WEB Back & API: PHP, NodeJS</h3>
                    <h3>- Développement complet de sites WEB Front & Back</h3>
                    <h3>- Déploiement et/ou référencement</h3>
                    <h3>- Conception applications mobiles sur Android et iOS : Flutter, Swift, iOnic</h3>
                    <h3>- Prestations diverses : dépannages, formations, sauvegardes... (Nous contacter)</h3>
                    <h3>- Installation & configuration OS : Windows, Linux DISTRO, Mac OS & Hackintosh</h3>
                </div>
                <a href="/RDV" id="RDVBtn">Prendre RDV</a>
            </div>
        </section>
    </article>
    <footer>
        <div class="FooterInfos">
            <h3>@2024 - CodeForge Solutions - Tous droits réservés</h3>
            <h3>FRANCE, Yvelines</h3>
        </div>
    </footer>
</div>