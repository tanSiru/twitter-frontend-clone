import {Wrapper,Content, Banner, ProfileStuff, ProfilePic, Edit, Info, Name, Handler} from './ProfileImages.styles'

export default function ProfileImages() {
    return (
    <Wrapper>
        <Content >
            <Banner src={require('../images/test.jpeg')} alt="banner"/>
        </Content>
        <ProfileStuff>
            <ProfilePic src={require('../images/ikkun.jpeg')} alt="pfp"/>
        </ProfileStuff>
        <Edit>
            Edit Profile
        </Edit>
        <Info>

            <Name>
                Phos
            </Name>
            
            <Handler>
            @_phosphophy
            </Handler>

        </Info>
    </Wrapper>
    )
}
