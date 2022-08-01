import axios from "axios"
import React, {Component} from "react"
const url = "http://localhost:3001/upload"
class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            json : "",
            type : "results"
        }

        this.handleJson = this.handleJson.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    handleJson = (e) => {
        this.setState({json : e.target.value})
    }
    handleType = (e) => {
        this.setState({type : e.target.value})
        
    }
    handleSubmit(e){
        console.log("moi")
        e.preventDefault()
        axios.post(url, {
            json: this.state.json,
            type: this.state.type
        }).then(response => console.log(response))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <select name="type" value={this.state.type} onChange={this.handleType}>
                    <option value="results">Results</option>
                    <option value="engine">Engine</option>
                    <option value="pu">Power Unit</option>
                </select><br/>
                <textarea cols="60" rows="30" value={this.state.json} onChange={this.handleJson}></textarea><br/>
                <button>upload</button>
            </form>
        )
    }
}

export default Upload