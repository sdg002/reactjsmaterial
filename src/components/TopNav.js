import { yellow } from '@material-ui/core/colors';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class TopNav extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            value: 0
          };
    }

    handleChange = (event, value) => {
        //This is important - Otherwise the selection will not be shown
        console.log(`Inside handleChange event value:${value}` )
        this.setState({ value });
      };

    render() {
        return (
            <div style={{backgroundColor:"yellow", height:'5em'}}>
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

export default TopNav;  