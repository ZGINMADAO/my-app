import React from 'react';
import { Table } from 'antd';
import request from '../../utils/request'

const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        sorter: true,
        width: '20%',
    },

    {
        title: '昵称',
        dataIndex: 'nickname',
        sorter: true,
        width: '20%',
    },
    {
        title: '手机号',
        dataIndex: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

export default class App extends React.Component {
    state = {
        data: [],
        pagination: {
            pageSize:10
        },
        loading: false,
    };

    componentDidMount() {
        this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        console.log('handleTableChange pagination');
        console.log(pagination);
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    };

    fetch = (params = {}) => {
        // console.log('params:', params);
        this.setState({ loading: true });
        request.get('http://build.cn/table', {
            params: {
                results: this.state.pagination.pageSize,  //pageSize
                ...params,
            }
        }).then(data => {
            const pagination = { ...this.state.pagination };
            console.log('pagination');
            console.log(pagination);
            pagination.total = data.total;
            pagination.onlyADemo='ggc';
        
            this.setState({
                loading: false,
                data: data.rows,
                pagination,
            });
        }).catch(function (err) {
            console.log('err');
            console.log(err);
        });
    };


    render() {
        return (
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        );
    }
}