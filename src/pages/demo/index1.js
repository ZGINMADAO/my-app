import React from 'react'
import {Row, Col,Steps} from 'antd';
import "./index1.css"

const { Step } = Steps;

export default  class Index1 extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={8}>

                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                </Row>
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        );
    }
}
