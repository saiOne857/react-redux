import React from 'react';
import Style from './page.css';
import Header from './../Header';
import Footer from './../Footer';

class Page extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <Header/>
                <div>
                    {
                        this.props.children
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;