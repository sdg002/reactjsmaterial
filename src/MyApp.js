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