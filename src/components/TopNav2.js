import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";


class TopNav2 extends Component {
    constructor(props)
    {
        console.log("Inside ctor of TopNav2")
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
            <div>
                <AppBar position="static">
                    <Tabs 
                        variant="fullWidth"
                        aria-label="nav tabs example"
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        >
                        <Tab label="Item One"  component={Link} to={'/page1'}></Tab>
                        <Tab label="Item Two"  component={Link} to={'/page2'}></Tab>
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

    export default TopNav2;