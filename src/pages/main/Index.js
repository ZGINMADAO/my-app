import React from "react"
import styles from "./index.module.css"
import Loadable from 'react-Loadable'
import {inject,observer} from 'mobx-react'

// const SomeComponent = <h1>你好</h1>
const LoadSomeComponent = Loadable({
    loader: () => import('./Some'),
    loading: function ({ pastDelay, error }) {
        return (<h3>loading</h3>);
    }
})


@inject('appStore')
@observer
class Index extends React.Component {
    state = {
        show: false,
        delay: 1
    }

    showComponent = () => {
        console.log('appStore begin');
        console.log(this.props.appStore.isLogin);
        console.log('appStore end');

        // this.setState({
        //     show: true
        // });
        this.props.appStore.changeUsername('郭国聪');
    }
    render() {
       let username=this.props.appStore.username;
        if (this.state.show) {
            return <LoadSomeComponent />
        }
        return (
            <h1 className={styles.red} title="123" onClick={this.showComponent}>你好 {username}</h1>
        );
    }
}

export default Index
