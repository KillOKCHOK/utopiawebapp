import React from 'react'
import TabsMenuComponent from './TabsMenuComponent'




class SearchFlightComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="pageBaseComponent searchFlightPanel  w-75 mx-1 px-5 ">
                <TabsMenuComponent />
            </div>
        );
    }
}

export default SearchFlightComponent;