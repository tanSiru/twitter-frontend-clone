import { Wrapper } from './TopBar.styles'

type Props = {
    text:string;
}

export default function HomeBar({text}:Props) {
    return (
    <Wrapper>
        <div id="home">
            {text}
        </div>
        <img src={require('../images/home.png')} alt="HOME"/>
    </Wrapper>
    )
}
