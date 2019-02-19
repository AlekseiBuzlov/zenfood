// import { AppLevelAlert, IAppLevelAlertPayload } from '@core/models/AppLevelAlert.model';
import * as AppActions from '@actions/app.actions';
import environment from '@environment/environment';
import { from } from 'rxjs';

export interface State {
    // alertCounter: number;
    // appLevelAlerts: Array<AppLevelAlert>;
    // previousRoute: string;
}

export const actionTypes = Object.values(AppActions.actions);

export const initialState: State = {
    // appLevelAlerts: [],
    // alertCounter: 0,
    // previousRoute: '../'
};

function setDurationAlerts(alerts) {
    const sortedAlerts = alerts.sort((a, b) => a.id - b.id);
    return sortedAlerts.map((alert, index) => {
        alert.duration = environment.snackBarDuration * (sortedAlerts.length - index);
        return alert;
    });
}

function removeAlertFromList(alerts, id) {
    const foundAlert = alerts.find((alert) => alert.id === id);
    if (!foundAlert) {
        return alerts;
    }
    return alerts.filter((alert) => alert.id !== foundAlert.id);
}


export function reducer(state = initialState, action: AppActions.All): State {
    const states = {
        // [AppActions.actions.SHOW_ALERT_MESSAGE]: () => {
        //     const payload = (action as AppActions.ShowAlertMessage).payload as IAppLevelAlertPayload;
        //     const alerts = state.appLevelAlerts.concat([{
        //         isOpen: true,
        //         message: payload.message,
        //         type: payload.type,
        //         id: state.alertCounter++,
        //         duration: null
        //     }]);
        //     return {
        //         ...state,
        //         appLevelAlerts: setDurationAlerts(alerts),
        //         alertCounter: state.alertCounter++
        //     };
        // },
        // [AppActions.actions.CLOSE_ALERT_MESSAGE]: () => {
        //     const alerts = removeAlertFromList(state.appLevelAlerts, (action as AppActions.CloseAlertMessage).payload);
        //     return {
        //         ...state,
        //         appLevelAlerts: setDurationAlerts(alerts)
        //     };
        // },
    };

    if (states[action.type]) {
        return states[action.type]();
    }

    return state;
}
