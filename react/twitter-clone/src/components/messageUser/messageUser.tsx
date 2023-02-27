import { Content, Pfp, Wrapper } from './messageUser.style';

type Props = {
    user: string;
    handler:string;
    recent:string;
}


export default function MessageUser({user,handler,recent}:Props) {
    return (
    <Wrapper>

        <Content>
            <Pfp src={require('../images/test.jpeg')} width="50" height="50" />
            
        </Content>

        
    </Wrapper>
)
}
