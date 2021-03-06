import {Action, GameName} from '../../types';
import * as I from 'immutable';

interface IState {
  activeGame: GameName;
}

export type State = I.Record.IRecord<IState>;

const StateRecord = I.Record<IState>({
  activeGame: 'piano-game',
});

export function getInitialState(): State {
  return new StateRecord();
}

export default function comboGame(state: State = getInitialState(), action: Action): State {
  switch (action.type) {
    case 'setActiveGame': {
      return state.set('activeGame', action.payload.gameName) as State;
    }
    default: {
      return state;
    }
  }
};
