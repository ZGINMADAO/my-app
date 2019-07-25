import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {getUserAjax,getUserPromise,getUserPromise2} from '../../redux-stores/actions/usersAction'

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div>{this.props.users.username}</div>
                <div>{this.props.users.status}</div>
                <button onClick={this.props.onClick}>点击</button>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
    return {
        onClick: () => {
            console.log('mapDispatchToProps');
            // dispatch(getUserAjax()); //thunk
            dispatch(getUserPromise2())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);