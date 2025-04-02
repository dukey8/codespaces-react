
 
 export function Home() {
    const seasonCovers = ["dxd.webp", "new.webp", "born.jpg", "hero.jpg"]

    return(
        <div className="container">
            <header>
                <img src="/images/banner.png"/>
            </header>
            <main>
                <div className="season-container">
                    {seasonCovers.map((name,index) => {
                        return (
                            <div className="cover-container" key={index}>
                                <img key={index} src={`/images/seasons/${name}`}  />
                            </div>
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