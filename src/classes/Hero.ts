import powers from "../helpers/powers";

export class Hero {

    constructor(
        public name:string,
        public powerId: number,
        public age: number,
    ) {

    }

    get power(): string {
        return powers.find(power => power.id === this.powerId)?.desc || "";
    }
}
