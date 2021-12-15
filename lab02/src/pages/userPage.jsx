// Class component
import React, { Component } from "react";
import User from '../components/User';

class UserPage extends Component {
    render() {
        let arrUser = [
            {
                firstName: "Nam-Trung",
                lastName: "Do"
            },
            {
                firstName: "Uyen-Nhi",
                lastName: "Le"
            },
            {
                firstName: "Dong-Phuong",
                lastName: "Tran"
            }
        ]
        let firstName = "Donal";
        let lastName = "Trump";
        return (
            <>
                {
                    arrUser.map((item) => (
                        <User firstName={item.firstName} lastName={item.lastName} />
                    ))
                }
            </>
        );
    }
}

export default UserPage;