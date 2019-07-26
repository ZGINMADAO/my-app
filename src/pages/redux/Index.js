import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'antd'
import intl from 'react-intl-universal';
import { FormattedMessage  } from 'react-intl';

class Index extends React.Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    universalIntl = () => {

        //感觉这种方式不好
        intl.options.currentLocale = 'en';
        this.forceUpdate();
    }

    render() {
        return (
            <Fragment>
                <div onClick={this.props.onClick}>{this.props.products.name} 点击</div>
                <div>
                    <Button type="primary" onClick={this.showModal}>
                        Open Modal
                        </Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
                FormattedMessage:<FormattedMessage id="hello" />
                <div onClick={this.universalIntl}>切换语言{intl.get('MSG')}</div>

            </Fragment>

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
        },
        toggleLang: () => {
            dispatch({
                type: "en-lang"
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);