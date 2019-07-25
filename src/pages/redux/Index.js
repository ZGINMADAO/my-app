import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div onClick={this.props.onClick}>{this.props.products.name} 点击</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // prop : state.xxx  | 意思是将state中的某个数据映射到props中
        ...state
    }
}

const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
    return {
        onClick: () => {
            dispatch({
                type: 'ADD_NUM'
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);