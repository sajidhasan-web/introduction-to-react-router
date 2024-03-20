import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title}=post

    const navigate = useNavigate()

  const  handleShowDetails = () =>{
    navigate(`/post/${id}`)
  }



   
    return (
        <div style={{border:'2px solid green', padding: '15px', borderRadius:'15px'}}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post detail</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleShowDetails}>Show details by Click</button>
        </div>
    );
};

export default Post;