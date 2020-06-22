import React, { Component } from 'react'

export class AboutBussiness3 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {knownFor: '', description: ''};
        this.handleknownForChange = this.handleknownForChange.bind(this);
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleknownForChange(event)
    {
        this.setState({knownFor: event.target.value});
    }

    handledescriptionChange(event)
    {
        this.setState({description: event.target.value});
    }

    handleSubmit(event){
        //Add to the database
        alert("This is the sell " + this.state.knownFor + " and this is the description " + this.state.description);
    }

    render() {
        return (
            <div>
                <h2> Tell us about your bussiness</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <p style = {{paddingRight: "40px", paddingTop: "200px"}}>What is your bussiness known for?</p>
                        <input type="text" value = {this.state.knownFor} onChange = {this.handleknownForChange}/>
                    </label>

                    <label>
                        <p style = {{paddingRight: "5px"}}>Can you provide a description?</p>
                        <textarea value = {this.state.description} onChange = {this.handledescriptionChange} style = {{height: "200px", width: "300px"}}/>
                    </label>
                    <p></p>
                    <input type="submit" value="Next"  />
                </form>
            </div>
        )
    }
}

export default AboutBussiness3
