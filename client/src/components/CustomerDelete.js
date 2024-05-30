import React from "react";

class CustomerDelete extends React.Component {

    deleteCustomer(id) {
        const url = "api/customers/" + id;
        // fetch(url, {
        //     method: "DELETE"
        // }).then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         this.props.stateRefresh();
        //     })
        //     .catch(err => console.log(err));

        fetch(url, {
            method: "DELETE"
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => { this.deleteCustomer(this.props.id) }}>삭제</button>
        )
    }
}

export default CustomerDelete;