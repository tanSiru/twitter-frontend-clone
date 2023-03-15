import {Wrapper,Content, Banner} from './ProfileImages.styles'

export default function ProfileImages() {
    return (
    <Wrapper>
        <Content >
            <Banner src={require('../images/test.jpeg')} alt="banner"/>
        </Content>
    </Wrapper>
    )
}
