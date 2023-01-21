import {SearchBar, Suggest, Wrapper,Profile, Happening} from './bar.styles'

export default function bar() {
  return (
    <Wrapper>
      <SearchBar/>
      


      <Happening>
        
      </Happening>

      <Suggest>
        <div className="youmightlike">
          You might like
        </div>

        <div className="suggested">
            <Profile src={require('../menus/images/test.jpeg')}/>
            <div className="profile">
              <div className="username">
                Phos
              </div>
              <div className="at">
                @_phosphophy
              </div>
            </div>
            <div className="follow">
                follow
            </div>
        </div>


        <div className="suggested">
            <Profile src={require('../menus/images/test.jpeg')}/>
            <div className="profile">
              <div className="username">
                Phos
              </div>
              <div className="at">
                @_phosphophy
              </div>
            </div>
            <div className="follow">
                follow
            </div>
        </div>


        <div className="suggested">
            <Profile src={require('../menus/images/test.jpeg')}/>
            <div className="profile">
              <div className="username">
                Phos
              </div>
              <div className="at">
                @_phosphophy
              </div>
            </div>
            <div className="follow">
                follow
            </div>
        </div>
      </Suggest>

      

    </Wrapper>
  )
}
