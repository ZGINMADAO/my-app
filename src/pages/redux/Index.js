import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>this.props.foo</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // prop : state.xxx  | 意思是将state中的某个数据映射到props中
        foo: state.bar
    }
}

const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
    return {
        onClick: () => {
            dispatch({
                type: 'increatment'
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Foo);