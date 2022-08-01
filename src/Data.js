import React ,{Component} from "react"
import axios from "axios"
const url = "http://localhost:3001"

function Item(props) {
    if(props.results.length>0){
        return(
            props.results.map(item => <tr>
            <td>{Number(item.position) === 0 ? "DNF" : item.position}</td>
            <td>{item.driverNumber}</td>
            <td>{item.driverName}</td>
            <td>{item.teamName}</td>
            <td>{item.completedLaps}</td>
            <td>{item.totalRaceTime}</td>
            <td>{item.gap}</td>
            <td>{item.interval}</td>
            <td>{item.topSpeed}</td>
            <td>{item.fastestLap}</td>
            <td>{item.fastestLapNumber}</td>
            <td>{item.points}</td>
            </tr>))
    }
    else{
        return(<h1>loading...</h1>)
    }
}

class Data extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }
    componentDidMount(){
        axios.get(`${url}/results`)
        .then(res => {
            const results = res.data
            this.setState({results})
            console.log(this.state.results)
        })
    }
    
    render(){
        // console.log(results)
        return(
            <table>
                <tr>
                    <td>position</td>
                    <td>driver number</td>
                    <td>driver name</td>
                    <td>team name</td>
                    <td>completed laps</td>
                    <td>total time</td>
                    <td>gap</td>
                    <td>interval</td>
                    <td>top speed</td>
                    <td>fastest lap</td>
                    <td>fastest lap number</td>
                    <td>points</td>
                </tr>
                <Item results={this.state.results}/>
            </table>
        )
    }
}

export default Data