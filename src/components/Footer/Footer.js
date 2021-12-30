import { FooterStyled } from './styles'
import ballerini from '../../assets/ballerini.svg'

function Footer() {
    return (
        <FooterStyled>
            <img src={ballerini} alt='Ballerini Logo'></img>
        </FooterStyled>
    )
}

export default Footer;