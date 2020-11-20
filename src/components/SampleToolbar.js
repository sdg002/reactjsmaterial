import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
//import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


// const myHook = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 12,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'yellow',
//       height: 48,
//       padding: '0 30px',
//     },
//   });

const styles =(theme)=>( {
    margin: {
        margin: theme.spacing(1),
      },    
    root:{
        
    },
    redShadedButton: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

class SampleToolbar extends Component {
    constructor(props)
    {
        super(props)
        console.log("Inside SampleToolbar");
        this.classes=props.classes;
    }
    render() {
        return (
            <div>
                <h2>Toolbar with button and TextFields</h2>
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
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button variant="outlined" color="default" >Ok</Button>
                </Toolbar>                
                <hr/>
                    <h2>Custom shaded buttons</h2>
                    <Button className={this.classes.redShadedButton}>Styled with Hook API</Button>
                <hr/>
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

                <hr/>
                <h2>Mix of basic HTML elements</h2>
                <Toolbar>
                    <label htmlFor="my-input">Email address</label>
                    <input id="my-input" aria-describedby="my-helper-text" />
                    <button>cool</button>
                    <Button variant="outlined" color="default" >Ok</Button>
                </Toolbar>
                <hr/>
            </div>
            

        );
    }
}

function HigherOrderComponent(props) {
    const { classes } = props;
    return <SampleToolbar classes={classes}>Higher-order component</SampleToolbar>;
  }
  
//export default SampleToolbar;
export default withStyles(styles,{ withTheme: true })(SampleToolbar);