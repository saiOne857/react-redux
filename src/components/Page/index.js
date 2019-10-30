import React from 'react';
import Style from './page.css';
import Header from './../Header';
import Footer from './../Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

class Page extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className={Style.page}>
                <CssBaseline />

                <div className={Style.wrap}>
                    <Header/>
                    <div className={Style.content} >
                    {
                        this.props.children
                    }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;