import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import MainHead from "../components/MainHead";
import Provider from "../components/Provider";

export default class MainTemplate extends Component {
    componentDidMount() {
        try {
            injectTapEventPlugin();
        } catch (e) {
            
        }
        
    }
    render() {
        return (
            <div>
                <MainHead/>
                <Provider>
                    <MuiThemeProvider>
                        {this.props.children}
                    </MuiThemeProvider>
                </Provider>
            </div>
        );
    }
}
