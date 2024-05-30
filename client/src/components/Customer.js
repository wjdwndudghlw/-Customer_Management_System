import React from "react";
import TableRow from '@material-ui/core/TableRow'; // 올바른 경로로 수정
import TableCell from '@material-ui/core/TableCell'; // 예시로 추가

class Customer extends React.Component {
    render() {
        return (
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>
        )
    }
}



// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt="profile" />
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }






export default Customer; 