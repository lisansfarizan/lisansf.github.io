import { Link } from "react-router-dom";
import data from '../data';

const Home = () => {
    const post = data.flatMap(user => user.post);
    return(
        <>
            <div id="post-cards">
            {
                post.map((post, index) => (
                    <div key={index} className="cards">
                        <p><Link to={`/post${post.link}`} className="cards-title">{post.title}</Link></p>
                        <div className="wrap-shortdesc">
                            <Link to={`/post${post.link}`}>
                                <img alt={`Pic of ${post.title}`} src={post.img} />
                            </Link>
                            <p className="shortdesc">{post.shortdesc}</p>
                        </div>
                    </div>
                ))
            }
            </div>
            <div id="sidebar"></div>
        </>
    )
}

export default Home;