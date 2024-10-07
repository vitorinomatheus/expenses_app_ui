export default class UserRelationSocialPeriod {
    id?: number;

    constructor(
        public userId: number,
        public eventType: number,
        public monthWeek: number,
        public value: number
    ) { }
}