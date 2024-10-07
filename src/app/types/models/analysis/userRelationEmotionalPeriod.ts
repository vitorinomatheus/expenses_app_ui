export default class UserRelationEmotionalPeriod {
    id?: number;

    constructor(
        public userId: number,
        public emotionalType: number,
        public value: number,
        public monthWeek: number
    ) { }
}