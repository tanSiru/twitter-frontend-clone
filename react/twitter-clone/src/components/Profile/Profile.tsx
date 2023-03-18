import ProfileFeed from '../ProfileFeed/ProfileFeed'
import ProfileImages from '../ProfileImages/ProfileImages'
import { Content, Wrapper } from './Profile.styles'

export default function Profile() {
    return (
    <Wrapper>
        <Content>
            <ProfileImages/>
            <ProfileFeed/>
        </Content>
       
    </Wrapper>
    )
}
