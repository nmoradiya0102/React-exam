import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'


const Data = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        get_data();
    }, []);

    const get_data = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const deleteData = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                // Update the state by removing the deleted item
                setData((prevData) => prevData.filter(item => item.id !== id));
                Swal.fire({
                    title: "Deleted successfully..!",
                    text: "You clicked the Ok button..!",
                    icon: "success"
                })
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="container table-responsive py-5">
                <label>Search here:</label>
                <input className='m-3' type='text' onChange={(e) => setSearch(e.target.value)} />
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>UserId</th>
                            <th>Title</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((item) => {
                                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
                            })
                            .map((val_, ind_) => {
                                return (
                                    <tr key={val_.id}>
                                        <td>{val_.id}</td>
                                        <td>{val_.userId}</td>
                                        <td>{val_.title}</td>
                                        <td>
                                            <button onClick={() => deleteData(val_.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Data;
