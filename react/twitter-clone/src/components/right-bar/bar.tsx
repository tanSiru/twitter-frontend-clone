import {SearchBar, Suggest, Wrapper,Profile, Happening} from './bar.styles'

export default function bar() {
  return (
    <Wrapper>
      <SearchBar/>
      
      <Happening>
        <div className="whatshappening">
              Whats Happening
        </div>

      <div className="event">
        <div className="content">
          <div className="trending">
              Trending
          </div>
          <div className="news">
              Persona 1
          </div>
        </div>
        
      </div>

      <div className="event">
        <div className="content">
          <div className="trending">
              Trending
          </div>
          <div className="news">
              Persona 2
          </div>
        </div>
      </div>


      <div className="event">
        <div className="content">
          <div className="trending">
              Trending
          </div>
          <div className="news">
              Persona 3
          </div>
        </div>
      </div>

      <div className="event">
        <div className="content">
          <div className="trending">
              Trending
          </div>
          <div className="news">
              Persona 4
          </div>
        </div>
      </div>

      <div className="event">
        <div className="content">
          <div className="trending">
              Trending
          </div>
          <div className="news">
              Persona 5
          </div>
        </div>
      </div>
        
      </Happening>

      <Suggest>
        <div className="youmightlike">
          You might like
        </div>

        <div className="suggested">
            <Profile src={require('../images/test.jpeg')}/>
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
            <Profile src={require('../images/test.jpeg')}/>
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
            <Profile src={require('../images/test.jpeg')}/>
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
