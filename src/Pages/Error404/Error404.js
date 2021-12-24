import { ContainerAtCenter } from './styles'
import bot from '../../assets/ballebot404.svg'

function Error404() {
    return (
        <ContainerAtCenter>
            <div className='error'>
                <h1>Error 404</h1>
                <h2>Not found!</h2>
                <a href="/">
                    <button>Go to Home Page!</button>
                </a>
            </div>
            <div>
                <img src={bot}></img>
            </div>
        </ContainerAtCenter>
    )
}

export default Error404;