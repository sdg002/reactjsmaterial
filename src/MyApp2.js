import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


/*
Much better tabs
Shows 3 tabs
Shows the selection

*/

class MyApp2 extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            value: 0
          };
    }
    handleChange = (event, value) => {
        //This is important - Otherwise the selection will not be shown
        console.log("Inside handleChange event")
        this.setState({ value });
      };
    
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs 
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary">
                        <Tab label="Item One"   />
                        <Tab label="Item Two"   />
                        <Tab label="Item Three"   />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default MyApp2;           