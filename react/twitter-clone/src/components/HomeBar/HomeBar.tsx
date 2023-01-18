import { Wrapper } from './HomeBar.styles'

export default function HomeBar() {
    return (
    <Wrapper>
        <div id="home">
            Home
        </div>
        <img src={require('../menus/images/home.png')} alt="HOME"/>
    </Wrapper>
    )
}
