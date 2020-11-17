# Demo of using Material UI

# How to install?
```
npm install @material-ui/core
```

# You will need ?
```
npm install --save react-router-dom
```


# Very elementary tab example
1. Displays tabs
1. Not very interactive
1. Does not hilight the selected tab
1. No content within each tab panel

```
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class MyApp extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs textColor="primary">
                        <Tab label="Item One"   />
                        <Tab label="Item Two"   />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default MyApp;           
```


# Tab with selection

```
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

```