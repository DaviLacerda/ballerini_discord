import { Container } from "./styles";
import bot from "../../assets/ballebot.svg";

function MainContent() {
    return (
        <Container>
            <div className="welcome">
                <div className="welcome__left">
                    <h1>Balle Bot</h1>
                    <p>Make your community safe the easy way</p>
                    <button>Add me!</button>
                </div>
                <div className="welcome__right">
                    <img src={bot}></img>
                </div>
            </div>

            <div className="makes">
                <h3>What does she do for you?</h3>
                <ol>
                    <li>
                        Create a captcha verification system for new members to
                        ensure they are not robots
                    </li>
                    <li>
                        It has an automatic banning system for suspicious links
                        that are sent in the community
                    </li>
                    <li>
                        Warning and manual banning system, for administrators to
                        use
                    </li>
                </ol>
            </div>

            <div className="rafaela">
                <div className="rafaela__left">
                    <h2>Who created BalleBot?</h2>
                    <p>
                        This bot are created by Rafaela Ballerini, with support
                        his community.
                    </p>
                    <h2>Who's Rafaela Ballerini?</h2>
                    <cite>
                        <span>"</span>
                        Cursei Medicina por três anos até descobrir minha
                        paixão: desenvolvimento de software. Hoje trabalho
                        como criadora de conteúdo de programação e
                        tecnologia, guiando pessoas que desejam iniciar na
                        área de desenvolvimento de software. Possuo um canal
                        no Youtube com mais de 128 mil inscritos e tenho
                        mais de 86 mil pessoas acompanhando meu conteúdo no
                        Instagram. Sou fundadora de uma comunidade de mais
                        de 24 mil membros: Comunidade Ballerini, onde
                        compartilhamos conhecimento sobre as diferentes
                        áreas da programação, tiramos dúvidas e fazemos
                        networking. Já trabalhei como instrutora front-end
                        na Alura, uma das maiores escolas de tecnologia do
                        Brasil. Acompanhe meu conteúdo:
                        <a href="https://beacons.ai/rafaballerini">https://beacons.ai/rafaballerini</a>
                        <span>"</span>
                    </cite>
                </div>
            </div>
        </Container>
    );
}

export default MainContent;
