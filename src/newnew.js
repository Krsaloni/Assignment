import React, { useState, useEffect } from 'react';
import './style.css';
const Newnew = () => {
    const [data, setData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                console.error(error);
                setData([
                    {
                        companyName: 'Company 1',
                        ownerName: 'John Doe',
                        city: 'New York',
                        country: 'USA',
                        description: 'A technology company',
                        contact: '555-555-1212'
                    },
                    {
                        companyName: 'Company 2',
                        ownerName: 'Jane Doe',
                        city: 'London',
                        country: 'UK',
                        description: 'A finance company',
                        contact: '555-555-1213'
                    }
                ]);
            });
    }, []);
    const handleDetailsClick = index => {

        setSelectedIndex(index === selectedIndex ? null : index);
    };

    return (
        <div class="outdiv">
            <table class="mytablecss">
                {/* <tbody> */}
                {data.map((item, index) => (
                    <React.Fragment key={index}>
                        <tr class="rowrow">
                            <td>{item.id}</td>
                            <td>
                                <tr><th>NAME</th></tr>
                                <tr>{item.name}</tr>
                            </td>
                            <td>
                                <tr><th>USERNAME</th></tr>
                                <tr>{item.username}</tr>
                            </td>
                            <td>
                                <tr><th>EMAIL</th></tr>
                                <tr>{item.email}</tr>
                            </td>
                            <td>
                                <tr><th>ADDRESS</th></tr>
                                <tr>{item.address.street}</tr>
                                <tr>{item.address.suite}</tr>
                                <tr>{item.address.city}</tr>
                                <tr>{item.address.zipcode}</tr>

                                <tr><th>GEO</th></tr>
                                <tr>{item.address.geo.lat}</tr>
                                <tr>{item.address.geo.lng}</tr>
                            </td>
                            <td>
                                <input type="button" value="View Details" class="btn" id="btnclick"
                                    onClick={() => handleDetailsClick(index)}>
                                </input>
                            </td>

                            {selectedIndex === index && (
                                <tr>
                                    <div id="show" class="content">
                                        <span><strong>Phone:</strong></span>
                                        <span>{item.phone}</span><br></br>
                                        <span><strong>Website:</strong></span>
                                        <span>{item.website}</span><br></br>
                                        <span><strong>Company:</strong></span>
                                        <span>
                                            <tr>{item.company.name}</tr>
                                            <tr>{item.company.catchPhrase}</tr>
                                            <tr>{item.company.bs}</tr>
                                        </span>
                                    </div>
                                </tr>
                            )}

                        </tr>
                    </React.Fragment>
                ))}
                {/* </tbody> */}
            </table>
        </div >
    );
    // function change() {
    //     if (btnclick.value == "View Details") {
    //         btnclick.value = "Hide Details";
    //     }
    //     else if (btnclick.value == "Hide Details") {
    //         btnclick.value = "View Details";
    //     }
    // }
};

export default Newnew;