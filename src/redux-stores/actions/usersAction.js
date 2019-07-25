import request from '../../utils/request'
import { createAction } from 'redux-actions'
// 保存用户消息
export const getUser = (userInfo) => {
    return {
        type: 'user-get'
    }
}

export const saveUser = (data) => {
    return {
        type: 'user-save',
        payload: data
    }
}



export const getUserAjax = () => {
    return async function (dispatch, getState) {
        console.log(getState());
        await request.post('login').catch(function (error) {
            console.log('login catch error');
            console.log(error);
        });
        console.log('getUserAjax');
        dispatch(saveUser());
    }
}

export const getUserPromise = () => {
    console.log('getUserPromise');
    return request.post('login').then(function () {
        return { type: "user-save" };
    }).catch(function () {
        return { type: "user-save" };
    });
}

export const getUserPromise2 = createAction("user-save", function () {
    return request.post('login').then(function () {
        // return { type: "user-save" };
    }).catch(function () {
        console.log('error');

    });
});