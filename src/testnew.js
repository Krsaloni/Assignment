import React, { useState, useEffect } from 'react';
import './style.css';
const Testnew = () => {
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

    return (
        <div class="outdiv">
            {data.map((item, index) => (
                <div id="myDIV">
                    <React.Fragment key={index}>
                        <div class="item1">
                            <tr>{item.id}</tr>
                        </div>
                        <div class="item2">
                            <tr><th>NAME</th></tr>
                            <tr>{item.name}</tr>
                        </div>
                        <div class="item3">
                            <tr><th>USERNAME</th></tr>
                            <tr>{item.username}</tr>
                        </div>
                        <div class="item4">
                            <tr><th>EMAIL</th></tr>
                            <tr>{item.email}</tr>
                        </div>
                        <div class="item5">
                            <tr><th>ADDRESS</th></tr>
                            <tr>{item.address.street}</tr>
                            <tr>{item.address.suite}</tr>
                            <tr>{item.address.city}</tr>
                            <tr>{item.address.zipcode}</tr>
                        </div>
                        <div class="item6">
                            <tr><th>GEO</th></tr>
                            <tr>{item.address.geo.lat}</tr>
                            <tr>{item.address.geo.lng}</tr>
                        </div>
                        <div class="item7">
                            <button class="btn" id="btnclick"
                                onClick={() => onButtonClick(index)}
                            >View Details
                            </button>
                        </div>
                        <div class="item8">{selectedIndex === index && (

                            <div className='content'>
                                <div>
                                    <tr><strong>Phone:</strong></tr>
                                    <tr>{item.phone}</tr>
                                </div>
                                <div>
                                    <tr><strong>Website:</strong></tr>
                                    <tr>{item.website}</tr>
                                </div>
                                <div>
                                    <tr><strong>Company:</strong></tr>
                                    <tr>
                                        <tr>{item.company.name}</tr>
                                        <tr>{item.company.catchPhrase}</tr>
                                        <tr>{item.company.bs}</tr>
                                    </tr>
                                </div>
                            </div>
                        )}
                        </div>
                    </React.Fragment>
                </div>
            ))}
        </div >
    );

    function onButtonClick(index) {
        change();
        setSelectedIndex(index === selectedIndex ? null : index);

    }

    function change() {
        console.log('Change called...');
        var x = document.getElementById("btnclick");
        if (x.innerHTML === "View Details") {
            x.innerHTML = "Hide Details";
        } else {
            x.innerHTML = "View Details";
        }

    }
};
export default Testnew;