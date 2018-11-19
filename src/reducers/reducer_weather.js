import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    if (action.error) {

        alert('City not found! Check city spelling.');

        return state;

    }
    switch (action.type) {
        case FETCH_WEATHER:
            // dont manipulate state directly, concat instead of push
            return state.concat([action.payload.data]);
    }
    return state;
}