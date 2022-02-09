import { AnyAction } from 'redux';

import { StateTasks } from 'types/Redux';

function initialState (): StateTasks {
    return [];
}

export default function tasks (state: StateTasks = initialState(), action: AnyAction) {
    switch (action.type) {
        default: return state;
    }
}
