import React from 'react';
// we're using 'useAuth0' to retrive the user's profile information through the user property.
import { useAuth0 } from '../../react-auth0-wrapper';

//using this component to confirm and display user authentication details
const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <>
            <img src={user.picture} alt="Profile" />

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code>
        </>
    );
};

export default Profile;