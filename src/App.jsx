import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: "tinchodacorta",
    name: "Martin Da Corta",
    isFollowing: true,
  },
  {
    userName: "MatiasVila13",
    name: "Matías Vila",
    isFollowing: false,
  },
  {
    userName: "faculuna___",
    name: "Facundo Luna",
    isFollowing: false,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel",
    isFollowing: true,
  }
]

export function App() {
    /* const format = (userName) => `@${userName}` */
    /* const tincho = { userName: 'tinchodacorta', isFollowing: true }
    const mati = { userName: 'MatiasVila13', isFollowing: true }
    const faculuna = { userName: 'faculuna___', isFollowing: false } */
    return (
        <section className='App'>
          {
            users.map((user) => {
              const {userName, name, isFollowing } = user
              return (
                <TwitterFollowCard
                  key={userName}
                  userName={userName}
                  initialIsFollowing={isFollowing}
                >
                  {name}
                </TwitterFollowCard>
              )
            })
          }
            
        </section>
    )
}

       /*  <TwitterFollowCard {...tincho}>
                Martin Da Corta
            </TwitterFollowCard>
            <TwitterFollowCard {...mati}>
                Matías Vila
            </TwitterFollowCard>
            <TwitterFollowCard {...faculuna}>
                Facundo Luna
            </TwitterFollowCard> */

            /* <TwitterFollowCard 
              formatUserName={format} 
              userName="faculuna___" 
              name="Facundo Luna" 
              isFollowing={false}
            /> */