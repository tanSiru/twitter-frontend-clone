import {Wrapper,Content, Banner, ProfileStuff, ProfilePic} from './ProfileImages.styles'

export default function ProfileImages() {
    return (
    <Wrapper>
        <Content >
            <Banner src={require('../images/test.jpeg')} alt="banner"/>
        </Content>
        <ProfileStuff>
            <ProfilePic src={require('../images/ikkun.jpeg')} alt="pfp"/>
        </ProfileStuff>
    </Wrapper>
    )
}
