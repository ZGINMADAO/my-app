import { takeEvery,put} from 'redux-saga/effects'
import request from '../utils/request'

function* getInitList() {
    yield request.get('/list.json').catch(function(){
        console.log('saga request err');
    });

    yield put({type:"user-save"})
}

// generator 函数
function* mySaga() {
    yield takeEvery('user-init', getInitList) // takeEvery捕捉每一个派发出来的action type类型为GET_INIT_LIST的时候，就会执行getInitList方法
}

export default mySaga