import './styles.css'
import { Content, Line, Profile, TextContent, TweetContent } from './TweetBox.styles'

export default function TweetBox() {
    return (
    <>
        <Line/>
            <Content>
                <img src={require('../menus/images/test.jpeg')} alt="PFP" className='pfp'/>
                <TweetContent>
                    <Profile>
                        <div className="text-white text-md">
                            Phos 
                        </div>
                        <div  className="text-sm text-gray-500">
                            @phosphophy
                        </div>
                    </Profile>
                    <TextContent>
                        saasdsaasdsaasdsaasdsaasdsaasdsaasdsaasd 
                    </TextContent>

                </TweetContent>
            </Content>
        <Line/>
    </>
    
    )
}
