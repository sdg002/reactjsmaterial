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


# How to catch non-existent paths and home page

```
    <HashRouter>
      <TopNav2></TopNav2>
      <Switch>
          <Route path="/page1" exact>
            <div>This is page 1</div>
          </Route>
          <Route path="/page2" exact>
            <div>This is page 2</div>
          </Route>
          <Route path="/" exact>
            <div>This is when nothing is specified</div>
          </Route>
          <Route path="*" exact>
            <div>This is a catch all path for non-existent link</div>
          </Route>
        </Switch>                  
      
    </HashRouter>

```

# Simple buttons

```
                <Toolbar>
                    <Button variant="contained" color="default" >
                        Default
                    </Button>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sizer="small" value="you were here, what is variant for TextField"/>
                    
                    <Button variant="outlined" color="default" >Ok</Button>
                </Toolbar>                

```

# Buttons with various sizes

```
                <h2>Buttons with various sizes</h2>
                <div>

                    <Button size="small" variant="contained" color="primary">
                    Small primary
                    </Button>
                    <Button size="medium" variant="contained" color="secondary">
                    Medium secondary
                    </Button>
                    <Button size="large" variant="contained" color="default">
                    Large default
                    </Button>
                </div>

```


# Inline tool bar with - Search drop down, text box and button
```
```


# Debugging with VS Code
- Click on the Run button
- You will need to create a new launch.json under .\vscode folder
- I chose vscode-jest-tests

## Launch config file
```
    "configurations": [
        {
            "type": "node",
            "name": "vscode-jest-tests1",
            "request": "launch",
            "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/react-scripts",
            "args": [
                "test",
                "--env=jsdom",
                "--runInBand"
            ],
            "cwd": "${workspaceFolder}",
            "console": "integratedTerminal",
            "protocol": "inspector",
            "internalConsoleOptions": "neverOpen",
            "disableOptimisticBPs": true
        },

```
## How to debug?
- Ensure you have the above config
- You should have an unit test code which uses the `test` method
- Place a break point in this test method
- Locate the *Play* icon in the left panel.
- You should see another small *Play* icon on the top of the solution explorer
- Ensure you `configuration` file has been selected
- Click the *Play* icon


# Using Bootstrap along with Material
- You will have to add the BS package
- During import, you should avoid collisions with Material 

```
    import BsButton from 'react-bootstrap/Button';
    import BsForm from 'react-bootstrap/Form';
    import BsCol from 'react-bootstrap/Col';
    import BsInputGroup from 'react-bootstrap/InputGroup';
    import BsFormControl from 'react-bootstrap/FormControl';
    import 'bootstrap/dist/css/bootstrap.min.css';

```

# How to construct an inline form?
- Two approaches
- Approach 1 - <BsForm inline>
- Approach 2 - Using <BsForm.Row className="align-items-center"> inside <BsForm>
- Attention! - You will need to control the bottom padding of the SELECT field

# Bootstrap padding and margin
- Refer link https://getbootstrap.com/docs/4.0/utilities/spacing/
- You can control the margin along Y and also along X
