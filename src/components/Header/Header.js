import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';

function Header() {
    window.addEventListener('resize', () => {
        var barTop = document.getElementsByClassName('bar--top')[0]
        var barMid = document.getElementsByClassName('bar--mid')[0]
        var barBot = document.getElementsByClassName('bar--bot')[0]

        if(window.screen.width >= 600 && barTop){
            const menuToggle = document.getElementsByClassName('menu__toggle')[0]

            const header = document.querySelector('header');

            menuToggle.style.display = 'none'
            header.style.flexDirection = 'row';

            barTop.classList.remove('bar--top')
            barMid.classList.remove('bar--mid')
            barBot.classList.remove('bar--bot')
        }
    })


    return (
        <HeaderContainer>
            <img src={logo} alt='Logo'></img>

            <HamburguerMenu></HamburguerMenu>

            <nav className='menu'>
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
            </nav>

            <nav className='menu__toggle'>
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
            </nav>

        </HeaderContainer>
    )
}

export default Header;