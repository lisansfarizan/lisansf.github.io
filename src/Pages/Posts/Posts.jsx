import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../../data.js";
import Ads from "../../Components/SidebarComponents/Ads.jsx";
import Sidebar from "../../Components/Sidebar.jsx";

const Posts = () => {
    const { postUrl } = useParams();
    const post = data.flatMap(user => user.post).find(post => post.link === `/${postUrl}`);
    const author = data.find(user => user.post.includes(post))?.name;

    return (
        <>
        <Helmet title={`${post.title} | VEO Veneht`} />
            <div className="post">
                <p className="post-title">{post.title}</p><br/>
                <Ads/>
                <p>By {author}</p>
                <p>{post.desc}</p>
                <Ads/>
            </div>
            <Sidebar/>
        </>
    );
};

export default Posts;
