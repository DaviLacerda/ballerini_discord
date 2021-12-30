import { Container } from "./styles";
import bot from "../../assets/ballebot.svg";

//import images
import RafaelaBallerini from '../../assets/rafaela_ballerini.jfif'

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
                    <img src={bot} alt="BalleBot"></img>
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
                        I studied Medicine for three years until I discovered my
                        passion: software development. today I work
                        as a programming content creator and
                        technology, guiding people who want to get started in
                        software development area. I have a channel
                        on Youtube with more than 128 thousand subscribers and I have
                        more than 86 thousand people following my content on
                        Instagram. I am the founder of a community of more
                        24,000 members: Ballerini Community, where
                        we share knowledge about the different
                        areas of programming, we ask questions and do
                        networking. I've worked as a front-end instructor
                        at Alura, one of the largest technology schools in the
                        Brazil. Follow my content: <br></br>
                        <a href="https://beacons.ai/rafaballerini">https://beacons.ai/rafaballerini</a>
                        <span>"</span>
                    </cite>
                </div>
                <div className="rafaela__right">
                    <img src={RafaelaBallerini} alt="Rafaela Ballerini"></img>
                </div>
            </div>
        </Container>
    );
}

export default MainContent;
