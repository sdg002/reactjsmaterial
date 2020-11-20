import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import ReactDOM from 'react-dom';
//import { makeStyles} from '@material-ui/core/styles';
//import { green, orange } from '@material-ui/core/colors';
//import { useTheme } from '@material-ui/core/styles';
//import { yellow } from '@material-ui/core/colors';

/*

Implementing a top navigation with simple Tabs - No hyperlinks

*/

class TopNav extends Component {
    constructor(props)
    {
        console.log("Inside ctor of TopNav")
        super(props)
        this.state = {
            value: 0
          };
        //this.classes = this.createStyle();
    }
    //https://react-bootstrap.github.io/components/tabs/#tabs-props
    //Copied from Demos page, but could not get it to work
    // createStyle(theme)
    // {
    //     let c= {
    //         root: {
    //           flexGrow: 1,
    //           backgroundColor: 'yellow'
    //         },
    //       }
    //     return c;
    // }

    handleChange = (event, value) => {
        //This is important - Otherwise the selection will not be shown
        console.log(`Inside handleChange event value:${value}` )
        this.setState({ value });
      };

    render() {
        return (
            <div>
                <AppBar position="static" color="default" >
                    <Tabs 
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                         >
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