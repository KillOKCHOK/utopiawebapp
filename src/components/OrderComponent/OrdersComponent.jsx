import React from 'react';

import {Table} from "react-bootstrap";




class OrdersComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    
    
    
    render() {
        
        
        // console.log(this.props);
        return (
            <div className="pageBaseComponent searchFlightPanel  m-2     p-4 ">
            <h1>OrdersComponent</h1>
            <br></br>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        );
    }
}

export default OrdersComponent;