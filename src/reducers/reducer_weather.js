import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
    // dont manipulate state directly, concat instead of push
        return state.concat([action.payload.data]);
    }
    return state;
}