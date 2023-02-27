import { Wrapper } from './TopBar.styles'
import {useNavigate} from 'react-router-dom';


type Props = {
    text:string;
}

export default function HomeBar({text}:Props) {
    const navigate = useNavigate();


    return (
    <Wrapper>
        <div id="home">
            {text}
        </div>
        <img src={require('../images/home.png')} alt="HOME" onClick={()=>navigate('/')}/>
    </Wrapper>
    )
}
