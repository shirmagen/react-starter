import React, { useContext, useEffect } from "react";
import { usersContext } from "../contexts/users";

const UsersList = () => {
const { users, isLoading } = useContext(usersContext);

return isLoading 
? <span>Loading...</span> 
: <>
{users.map(({ id, email }) => <span key={id}>{email}</span>)}
</>;
}

export default UsersList
