import { Link } from 'react-router-dom';

 
 export function Home() {
    const seasonCovers = ["dxd.avif", "new.webp", "born.png",]
//  "hero.jpg"
    return(
        <div className="container">
            <header>
                <img src="/images/banner.png"/>
            </header>
            <main>
                <div className="season-container">
                    {seasonCovers.map((name,index) => {
                        return (
                            <Link to={`/eye-catchers/${index+1}`} className="cover-container" key={index}>
                                <img key={index} src={`/images/seasons/${name}`}  />
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