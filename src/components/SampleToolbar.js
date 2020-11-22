import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
//import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import BsButton from 'react-bootstrap/Button';
import BsForm from 'react-bootstrap/Form';
import BsCol from 'react-bootstrap/Col';
import BsInputGroup from 'react-bootstrap/InputGroup';
import BsFormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sizer="small" value="you were here, what is variant for TextField"/>
                    
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
                    <Button variant="outlined" color="default" variant="contained">Ok</Button>
                    <Select>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <TextField
                        label=""
                        id="filled-margin-dense"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        margin="dense"
                        variant="filled"
                        />

                    <TextField
                        label="Dense 333 label"
                        id="outlined-margin-dense"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        margin="dense"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-margin-dense1"
                        defaultValue="Default Value no label"
                        helperText="Some important text"
                        margin="dense"
                        variant="outlined"
                    />
                    <Button size="small" variant="contained" color="secondary">A button</Button>
                    <Select>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <TextField
                        label=""
                        id="outlined-size-small"
                        defaultValue="Small 123"
                        variant="outlined"
                        size="small"
                        />

                </Toolbar>
                <hr/>
                <h2>Within a form element 1</h2>
                <form  noValidate autoComplete="off">
                    <label htmlFor="picker1">Select search fields</label>
                    <Select value={10} id="picker1">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                    <Button size="small" variant="contained" color="primary">Search</Button>
                </form>
                <hr/>
                <h2>Within a form element 2</h2>
                <form  noValidate autoComplete="off">
                    <label htmlFor="picker1">Select search fields</label>
                    <span>&nbsp;&nbsp;</span>
                    <Select value={10} id="picker1" size="small" variant="outlined">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                    <span>&nbsp;&nbsp;</span>
                    <TextField
                        label=""
                        id="outlined-size-small"
                        defaultValue="Small 123"
                        variant="outlined"
                        size="small"
                        disableUnderline
                        />
                    <Button size="medium" variant="contained" color="primary">Search</Button>
                </form>
                <hr/>
                    <InputLabel id="label">Age</InputLabel>
                    <Select labelId="label" id="select" value="20">
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                    </Select> 
                <hr/>
                <h2>Native Select</h2>
                <form  noValidate autoComplete="off">
                    <label htmlFor="selectsearchfield">Select search fields</label>
                    <span>&nbsp;&nbsp;</span>
                    <NativeSelect id="selectsearchfield" value={{}} >
                        <option value="FirstName">FirstName</option>
                        <option value="LastName">LastName</option>
                    </NativeSelect>

                    <span>&nbsp;&nbsp;</span>
                    <TextField
                            label=""  id="outlined-size-small" defaultValue="" variant="outlined" size="small" disableUnderline />
                    <span>&nbsp;&nbsp;</span>
                    <Button size="medium" variant="contained" color="primary">Search</Button>
                </form>
                <hr/>
                <h2>Stack overflow question</h2>
                <a href='https://stackoverflow.com/questions/64938484/using-material-ui-for-creating-an-inline-form-with-label-text-select-and-button'>Link to question</a>
                <p>Could not get it to work. The SELECT field is too large</p>
                <form  noValidate autoComplete="off">
                    <FormControl>
                        <Typography variant="body1">Select search fields:</Typography>
                    </FormControl>  
                    <FormControl variant="outlined">
                        <InputLabel id="select-label-001">Select field</InputLabel>
                        <Select 
                            labelId='select-label-001'
                            label="Types"
                            size="small"
                            >
                            <MenuItem value={'FirstName'}>Ten</MenuItem>
                            <MenuItem value={'LastName'}>Twenty</MenuItem>
                        </Select>                  

                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Enter search pattern"
                            variant="outlined"
                            size="small"                            
                        />
                    </FormControl>
                </form>
                <hr/>
                <h2>Bootstrap buttons along side material</h2>
                
                <BsButton variant="primary">Primary</BsButton>{' '}
                <BsButton variant="warning">Warning</BsButton>{' '}

                <Button variant="contained" color="primary">This is material </Button>
                
                <a href='https://react-bootstrap.github.io/components/buttons/'>See React Bootstrap page</a>
                <hr/>
                <h2>Bootstrap inline form 1</h2>
                <BsForm inline>
                    <BsForm.Label htmlFor="searchFields" >
                        Select search field
                    </BsForm.Label>
                    <BsForm.Control
                        as="select"
                        className="mb-1 ml-2 mr-2 "
                        id="searchFields"
                        custom
                    >
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </BsForm.Control>

                    <BsForm.Control
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Search parameter"
                    />
                    <BsButton type="submit" className="mb-2">Search</BsButton>{' '}                    
                </BsForm>
                <hr/>
                <h2>Bootstrap inline form 2</h2>
                <BsForm>
                    <BsForm.Row className="align-items-center">
                        <BsCol xs="auto">
                            <BsForm.Label htmlFor="inlineFormInput" srOnly>
                                Name
                            </BsForm.Label>
                            <BsForm.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Jane Doe"
                            />
                        </BsCol>    
                        <BsCol xs="auto">
                            <BsForm.Label htmlFor="inlineFormInputGroup" srOnly>
                                Username
                            </BsForm.Label>
                            <BsInputGroup className="mb-2">
                                <BsInputGroup.Prepend>
                                <BsInputGroup.Text>@</BsInputGroup.Text></BsInputGroup.Prepend>
                                <BsFormControl id="inlineFormInputGroup" placeholder="Username" />
                            </BsInputGroup>
                        </BsCol>

                        <BsCol xs="auto">
                            <BsForm.Label htmlFor="inlineFormInputGroup001" >
                                My username
                            </BsForm.Label>
                        </BsCol>                                   
                        <BsCol xs="auto">
                            <BsForm.Control
                                    className="mb-2"
                                    id="inlineFormInputGroup001"
                                    placeholder="My input"
                                />
                        </BsCol>                                   

                        <BsCol xs="auto">
                            <BsForm.Label htmlFor="searchFields002" >
                                Select search fields
                            </BsForm.Label>
                        </BsCol>                                   
                        
                        <BsCol xs="auto">
                            <BsForm.Control
                                as="select"
                                className="mb-1 ml-2 mr-2"
                                id="searchFields002"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </BsForm.Control>
                        </BsCol>

                        <BsCol xs="auto">
                            <BsForm.Control
                                    className="mb-2"
                                    id="inlineFormInputGroup002"
                                    placeholder="Search text"
                                />
                        </BsCol>                                   
                        <BsCol xs="auto">
                            <BsButton type="submit" className="mb-2">Search</BsButton>{' '}    
                        </BsCol>
                    </BsForm.Row>
                </BsForm>
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