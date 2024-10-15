import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Posts = () => {
    const [post, setPost] = useState('');
    const [author, setAuthor] = useState('');
    const location = useLocation();
    
    useEffect(() => {
        fetch('/da.json')
        .then(x => x.json())
        .then(x => {
            const cariPostingan = x.flatMap(user=>user.post).find(post => post.link === location.pathname )
            setPost(cariPostingan)
            const cariAuthor = x.find(user => user.post.includes(cariPostingan))
            setAuthor(cariAuthor?.name || "Tidak Jelas");
        })
        .catch(err => console.error('Nggk ngeFetch', err))
    }, [location.pathname])

    return (
        <div className="main-wrapper">
            {post && author ? (
                <>
                <Helmet title={`${post.title} | VEO Veneht`}/>
                <div className="post">
                    <p>{post.title}</p>
                    <p>{post.desc}</p>
                    <p>{author}</p>
                </div>
                </>
            ) : (
                <>
                <div className="post">
                    <p>Halaman gk Keliatan Tol</p>
                </div>
                </>
            )
            }
        </div>
    );
};

export default Posts;
