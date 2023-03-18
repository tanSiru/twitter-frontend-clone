import ProfileFeed from '../ProfileFeed/ProfileFeed'
import ProfileImages from '../ProfileImages/ProfileImages'
import { Wrapper } from './Profile.styles'

export default function Profile() {
    return (
    <Wrapper>
        <ProfileImages/>
        <ProfileFeed/>
    </Wrapper>
    )
}
