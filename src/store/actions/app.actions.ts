import { Action } from '@ngrx/store';
// import { IAppLevelAlertPayload } from '@core/models/AppLevelAlert.model';

export const actions = {
    NO_ACTION: '[app] no action',
    // SHOW_ALERT_MESSAGE: '[app] show alert message',
    // CLOSE_ALERT_MESSAGE: '[app] close alert message',
};

export class NoAction implements Action {
    readonly type = actions.NO_ACTION;

    constructor(public payload?) {
    }
}

// export class ShowAlertMessage implements Action {
//     readonly type = actions.SHOW_ALERT_MESSAGE;

//     constructor(public payload?: IAppLevelAlertPayload) {
//     }
// }

// export class CloseAlertMessage implements Action {
//     readonly type = actions.CLOSE_ALERT_MESSAGE;

//     constructor(public payload?: number) {
//     }
// }


export type All =
    // ShowAlertMessage |
    NoAction;
    // CloseAlertMessage;
