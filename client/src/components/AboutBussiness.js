import React, { Component } from 'react'

export class AboutBussiness extends Component {

    //Add a confirm changes in the future to make sure businesses did not mispell

    constructor(props)
    {
        super(props);
        this.state = {zip: '', name: ''};
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleZipChange(event)
    {
        this.setState({zip: event.target.value});
    }

    handleNameChange(event)
    {
        this.setState({name: event.target.value});
    }

    handleSubmit(event){
        //Add to the database
        alert("This is the zip " + this.state.zip + " and this is the name " + this.state.name );
    }

    render() {
        return (
            <div>
                <h2> Tell us about your bussiness</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <p style = {{paddingRight: "120px", paddingTop: "700px"}}>Zip:</p>
                        <input type="text" value = {this.state.zip} onChange = {this.handleZipChange}/>
                    </label>

                    <label>
                        <p style = {{paddingRight: "45px"}}>Business Name:</p>
                        <input type="text" value = {this.state.name} onChange = {this.handleNameChange}/>
                    </label>
                    <p></p>
                    <input type="submit" value="Next"  />
                </form>
            </div>
        )
    }
}

export default AboutBussiness
