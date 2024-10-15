import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../../data";

const Posts = () => {
    const { postUrl } = useParams();  // Mengambil parameter dari URL
    const post = data.flatMap(user => user.post).find(post => post.link === `/${postUrl}`);
    const author = data.find(user => user.post.includes(post))?.name;

    return (
        <>
        <Helmet title={`${post.title} | VEO Veneht`} />
        <div className="main-wrapper">
            <div className="post">
            <p className="post-title">{post.title}</p><br/>
            <p>{post.desc}</p>
            <p>{author}</p>
            </div>
        </div>
        </>
    );
};

export default Posts;
