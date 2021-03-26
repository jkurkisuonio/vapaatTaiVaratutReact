import * as React from 'react';
import Resurssihaku from './Resurssihaku';
class VapaatTaiVaratut extends React.Component {

private ConnectJson(){
    console.log("Connecting json to fetch data...");
}

    render() {
    return (
    <div>       
        <Resurssihaku myValue={this.ConnectJson}  />
    </div>
);
}
}
export default VapaatTaiVaratut;
