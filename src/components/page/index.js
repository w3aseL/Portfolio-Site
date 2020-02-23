import React from 'react';
import { Helmet } from 'react-helmet';

class Page extends React.Component {
    render() {
        const PageComponent = this.props.component
        const title = this.props.title

        return (
            <React.Fragment>
                <Helmet>
                    <title>{`Noah Templet - ${(title ? title : "Page Not Found")}`}</title>
                </Helmet>
                <PageComponent />
            </React.Fragment>
        );
    }
}

export default Page