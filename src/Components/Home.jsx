import { Link } from "react-router-dom";
import data from '../data';

const Home = () => {
    const post = data.flatMap(user => user.post);
    return(
        <div className="main-wrapper">
            <div id="post">
            {
                post.map((post, index) => (
                    <div key={index} className="cards">
                        <p><Link to={`/post${post.link}`} className="cards-title">{post.title}</Link></p>
                        <p>{post.shortdesc}</p>
                    </div>
                ))
            }
            </div>
            <div id="sidebar"></div>
        </div>
    )
}

export default Home;
