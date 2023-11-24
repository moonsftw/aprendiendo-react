import { useState } from "react";

export function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing}) {

    /* const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1] */
    // lo anterior es equivalente a: 
    //primera posicion del array: valoe del estado, y la segunda es cómo actualizar ese estado
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button' 

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar midudev"
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
                <button className='tw-followCard-button2'>
                    Contactar
                </button>
            </aside>
        </article>
    )
}