import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';


function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    } catch(err) {
        yield put(actions.usersError({
            error: 'An error occured when trying to get a user'
        }))
    }
}

function* createUser(action) {
    try{
        yield call(api.createUser, {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
        })
        yield call(getUsers);
    } catch(err) {
        yield put(actions.usersError({
            error: 'An error occured when trying to create a user'
        }))
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* deleteUser({userId}) {
    try {
        yield call(api.deleteUser, userId)
        yield call(getUsers)
    } catch(e) {
        yield put(actions.usersError({
            error: 'An error occured when trying to delete a user'
        }))
    }
    
}

function* watchDeleteUserRequest() {
    while(true){
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {
            userId: action.payload.id
        })
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

export const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]