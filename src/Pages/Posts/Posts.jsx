import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ToramOnlineGuide = () => {
    const [post, setPost] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        fetch('/da.json')
        .then(x => x.json())
        .then(x => {
            const link = x.flatMap(user => user.post).find(p => p.link === location.pathname)
            
            link ? setPost(link) : setPost(null);
        })
        .catch(err => console.error('Can\'t Fetch a data', err))
    }, [location.pathname])

    return(
        <>
        <div className="main-wrapper">
        {post ? (
            <>
            <Helmet title={`${post.title} | VEO Veneht`}/>
            <div className="post">
                <p className="title">{post.title}</p>
                <p>{post.desc}</p>
            </div>
            </>
        ) : (
            <>
            <Helmet title={`Something went wrong! | VEO Veneht`}/>
            <div className="post">
                <p>Sorry we can't find that :(</p>
            </div>
            </>
        )
        }
        </div>
        </>
    )
}

export default ToramOnlineGuide