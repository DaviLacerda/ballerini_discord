import { HeaderStyled } from './styles'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <>
            <HeaderStyled>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
                <div className='links'>
                    <ul>
                        <a href="https://discord.com/invite/wagxzStdcR" target='_blank'>
                            <li>Comunity Ballerini</li>
                        </a>
                        <a href="/error/404">
                            <li>Tutorial</li>
                        </a>
                        <a href="https://github.com/rafaballerini/DiscordBot" target='_blank'>
                            <li>Open Source</li>
                        </a>
                        <a href="/error/404">
                            <li>Commands</li>
                        </a>
                    </ul>
                </div>
            </HeaderStyled>
        </>
    )
}

export default Header;