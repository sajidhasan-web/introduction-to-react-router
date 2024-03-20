import { useLoaderData, useParams } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    const {userId} = useParams()
    console.log(userId);
    const {name, website} = user
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>website: {website}</p>
            
        </div>
    );
};

export default UserDetails;