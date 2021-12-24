import { Container } from './styles'
import bot from '../../assets/ballebot.svg'

function MainContent() {
    return(
        <Container>
            <div className='welcome'>
                <div className='left'>
                    <h1>Balle Bot</h1>
                    <p>Make your community safe the easy way</p>
                    <button>Add me!</button>
                </div>
                <div className='right'>
                    <img src={bot}></img>
                </div>
            </div>

            <div className='makes'>
                <h3>What does she do for you?</h3>
                <ol>
                    <li>Create a captcha verification system for new members to ensure they are not robots</li>
                    <li>It has an automatic banning system for suspicious links that are sent in the community</li>
                    <li>Warning and manual banning system, for administrators to use</li>
                </ol>
            </div>
        </Container>
    )
}

export default MainContent;