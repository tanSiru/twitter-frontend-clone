import { Wrapper, Event, MainEvent} from './trending.styles'

export default function trending() {
  return (
      <Wrapper>

        <MainEvent>
          <div className="event">
              <img src={require('../images/test.jpeg')} alt="MainEvent"/>
          </div>

          <div className="description">
            Monogatari Series
          </div>
        </MainEvent>

        <Event>
          <div className="details">
              Trending
          </div>
          Persona 1
          <div className="details">
              20.1k Tweets
          </div>
        </Event>

        <Event>
          <div className="details">
              Trending
          </div>
          Persona 2
          <div className="details">
              20.1k Tweets
          </div>
        </Event>

        <Event>
          <div className="details">
              Trending
          </div>
          Persona 3
          <div className="details">
              20.1k Tweets
          </div>
        </Event>

        <Event>
          <div className="details">
              Trending
          </div>
          Persona 4
          <div className="details">
              20.1k Tweets
          </div>
        </Event>

        <Event>
          <div className="details">
              Trending
          </div>
          Persona 5
          <div className="details">
              20.1k Tweets
          </div>
        </Event>


        </Wrapper>
  )
}
