import './styles.css'
import { Content,LeftLine,Line,Profile,RightLine,TextContent,TweetContent} from './TweetBox.styles';

type Props = {
    user:string;
    content:string;
    handler:string;
}

export default function TweetBox({user,content,handler}:Props) {
    return (
    <>
        <Line/>
        <Content>
        {/* <LeftLine/>
        <RightLine/> */}
            <img src={require('../images/test.jpeg')} alt="PFP" className='pfp'/>
            <TweetContent>
                <Profile>
                    <div className="text-white text-md">
                        {user} 
                    </div>
                    <div  className="text-sm text-gray-500">
                        @{handler}
                    </div>
                </Profile>
                <TextContent>
                    {content} 
                </TextContent>
            </TweetContent>
        </Content>
        <Line/> 
    </>
    )
}
