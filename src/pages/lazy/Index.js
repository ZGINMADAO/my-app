import React, { lazy, Suspense } from 'react'

const LazyDemo = lazy(() => import("./Demo.js"));
export default class Index extends React.Component {

    state = {
        show: false
    }

    showComponent = () => {
        this.setState({
            show: true
        });
    }

    render() {
        // if (this.state.show) {
        //     <Suspense fallback={<h3>loading...</h3>}>
        //         <LazyDemo />
        //     </Suspense>
        // }

        return (
            <div>
                {this.state.show &&
                    (
                        <Suspense fallback={<h3>loading...</h3>}>
                            <LazyDemo />
                        </Suspense>
                    )
                }
                <h1 onClick={this.showComponent}>This is show lazy Component</h1>

            </div>
        );
    }
}