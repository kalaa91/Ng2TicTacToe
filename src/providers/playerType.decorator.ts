import { PlayerType } from './playerType.enum';

export function PlayerTypeAware(constructor: Function) {
    constructor.prototype.PlayerType = PlayerType;
}