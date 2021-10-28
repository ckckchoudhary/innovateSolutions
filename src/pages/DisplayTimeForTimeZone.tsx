import React, { Component } from 'react';
import { setInterval } from 'timers';

interface TimeZoneOption {
    name: string,
    offsetInMinutes: number
}


interface DisplayTimeForTimeZoneProps {
    timeZones: Array<TimeZoneOption>
}

interface DisplayTimeForTimeZoneState {
    timeZoneSelected: number | null;
    currentTime: string;
}


class DisplayTimeForTimeZone extends Component<DisplayTimeForTimeZoneProps, DisplayTimeForTimeZoneState> {
    constructor(props: DisplayTimeForTimeZoneProps) {
        super(props);
        this.state = {
            timeZoneSelected: null,
            currentTime: new Date().toTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ currentTime: this.getCalculateTime() })
        }, 1000)
    }

    changeTimeZone = (e:any)=>{
        const val = (e?.target as any).value;
        this.setState({timeZoneSelected: val});
    }

    getCalculateTime = () =>{
        const {timeZoneSelected} = this.state;
        if(!timeZoneSelected){
            return  new Date().toLocaleTimeString();
        }
        const currentTimeStampForSelectedTimezone = new Date().getTime() + timeZoneSelected * 60 * 1000;
        return new Date(currentTimeStampForSelectedTimezone).toLocaleTimeString();
    }



    render() {
        const { currentTime } = this.state;
        const { timeZones } = this.props;
        return (
            <div>
                <div>Time Zone Component</div>

                <select name="Select_Time_Zome" onChange={this.changeTimeZone}>
                    {
                        timeZones.map(({ name, offsetInMinutes }) => {
                            return (<option key={name} value={offsetInMinutes}>{name}</option>)
                        })
                    }

                </select>

                <div>
                    <label>Current Time</label>
                    <p>{currentTime}</p>
                </div>

            </div>
        );
    }
}

export default DisplayTimeForTimeZone;