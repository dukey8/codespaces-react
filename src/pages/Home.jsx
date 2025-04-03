import { Link } from 'react-router-dom';

 
 export function Home() {
    const seasonCovers = ["dxd.webp", "new.webp", "born.webp", "hero.webp"]


    return(
        <div className="container">
            <header>
                <Link to={'/'}>
                    <img src="/images/banner.png"/>
                </Link>
            </header>
            <main>
                <div className="season-container">
                    {seasonCovers.map((name,index) => {
                        return (
                            <Link to={`/eye-catchers/${index+1}`} className="cover-container" key={index}>
                                <img key={index} src={`/images/seasons/${name}`} loading='lazy'  />
                            </Link>
                        )
                    })}
                </div>
            </main>
            <footer>
                <h3>Eye Catchers</h3>
            </footer>
        </div>
    )
}