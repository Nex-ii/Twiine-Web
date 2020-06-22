import React, { Component } from 'react'

export class AboutBussiness2 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {sell: '', location: '', classification: ''};
        this.handleSellChange = this.handleSellChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleClassificationChange = this.handleClassificationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSellChange(event)
    {
        this.setState({sell: event.target.value});
    }

    handleLocationChange(event)
    {
        this.setState({location: event.target.value});
    }

    handleClassificationChange(event)
    {
        this.setState({classification: event.target.value});
    }

    handleSubmit(event){
        //Add to the database
        alert("This is the sell " + this.state.sell + " and this is the location " + this.state.location
         + " and this is the classification " + this.state.classification );
    }

    render() {
        return (
            <div>
                <h2> Tell us about your bussiness</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <p style = {{paddingRight: "40px", paddingTop: "200px"}}>What do you sell?</p>
                        <input type="text" value = {this.state.sell} onChange = {this.handleSellChange}/>
                    </label>

                    <label>
                        <p style = {{paddingRight: "5px"}}>Where are you located?</p>
                        <input type="text" value = {this.state.location} onChange = {this.handleLocationChange}/>
                    </label>

                    <label>
                        <p >Classify your bussiness</p>
                        <input type="text" value = {this.state.classification} onChange = {this.handleClassificationChange}/>
                    </label>
                    <p></p>
                    <input type="submit" value="Next"  />
                </form>
            </div>
        )
    }
}

export default AboutBussiness2
