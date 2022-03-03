import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userFetch } from '../action'
const Api = () => {
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch();
    console.log(users);
    return (
        <div>
            <button onClick={() => dispatch(userFetch())}>API</button>
            <table border="2">
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Api