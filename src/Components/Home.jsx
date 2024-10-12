import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/da.json')
        .then(x => x.json())
        .then(x => {
            setData(x);
        } )
        .catch(err => console.error('Error Fetching', err))
    }, [])


    return(
        <div className="main-wrapper">
            <div id="post">
            {data && data.map(user => (
                user.post.map((x, index) => (
                    <div key={index} className="cards">
                        <p><a href={x.link} className="cards-title">{x.title}</a></p>
                        <p>{x.shortdesc}</p>
                    </div>
                ))
            ))}
            </div>
            <div id="sidebar"></div>
        </div>
    )
}

export default Home