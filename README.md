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

# Tab with clickable links
- You will have to use the `component` property and specify a `Link`
- This will only work when placed inside a Router component
```
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

```

## Switch
```
    <HashRouter>
      <TopNav2></TopNav2>
      <Switch>
          <Route path="/" exact>
            <div>This is page 0</div>
          </Route>
          <Route path="/page1">
            <div>This is page 1</div>
          </Route>
          <Route path="/page2" >
            <div>This is page 2</div>
          </Route>
        </Switch>                  
      
    </HashRouter>
```
