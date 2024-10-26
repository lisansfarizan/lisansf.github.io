import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../../data.js";

const Posts = () => {
    const { postUrl } = useParams();  // Mengambil parameter dari URL
    const post = data.flatMap(user => user.post).find(post => post.link === `/${postUrl}`);
    const author = data.find(user => user.post.includes(post))?.name;

    return (
        <>
        <Helmet title={`${post.title} | VEO Veneht`} />
            <div className="post">
                <p className="post-title">{post.title}</p><br/>
                <p>{post.desc}</p>
                <p>By {author}</p>
            </div>
            <div className="sidebar">
                <p>ini sidenya</p>
            </div>
        </>
    );
};

export default Posts;
