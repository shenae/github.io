import React, { Component } from 'react';
import './BikeSharing.css';

 
class BikeSharing extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            name: '',
            company: '',
            city: '',
            country: 'DE',
            latitude: 0,
            longitude: 0,

        }
    
      }

componentDidMount = () => {
    //console.log('this is the country :', this.state);
  this.getFreeBikes()
}

_renderMarker(getFreeBikes, i) {
    // console.log(getFreeBikes)
    const lats = getFreeBikes.geometry.coordinates[1];
    const lngs = getFreeBikes.geometry.coordinates[0];
    console.log(lats, lngs)
    return (
      <Marker key={`getFreeBikes-${i}`} longitude={lngs} latitude={lats} >
        <getFreeBikesPin size={10} onClick={() => this.setState({popupInfo: getFreeBikes})} />
      </Marker>
    );
  }

    render () {

        const bikeDataArray = this.state.data.map(bike => {
            return (
                <div key={bike.id}>
                    <h1>{bike.name}</h1>
                    <h3>{bike.company}</h3>
                    <h3>{bike.location.city}</h3>
                    <h3>{bike.location.country}</h3>
                </div>
                
            )
        })
        return (
            <div>
                {bikeDataArray}
            </div>
        )
    }



}

export default BikeSharing;