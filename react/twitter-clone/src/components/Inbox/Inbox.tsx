import { User, Display, Pfp, Wrapper, Message } from './Inbox.styles';

type Props = {
    user: string;
    handler:string;
    recent:string;
}


export default function Inbox({user,handler,recent}:Props) {
    return (
    <Wrapper>

        <Pfp src={require('../images/test.jpeg')}/>
        <Display>

            <User>
                <div className="username">
                    {user}
                </div>
                <div className="handler">
                    @{handler}
                </div>
            </User>

            <Message>
                jsdajisaidjaioioahsdhasjsdajisaidjaioioahsdhasjsdajisaidjaioioahsdhas
            </Message>

            

        </Display>


        
    </Wrapper>
)
}
