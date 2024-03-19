import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title}=post
   
    return (
        <div style={{border:'2px solid green', padding: '15px', borderRadius:'15px'}}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post detail</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default Post;