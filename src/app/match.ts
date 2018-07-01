import { Country } from "./country";

export class Match {
    id: number;
    country1: Country;
    score1: number;
    country2: Country;
    score2: number;
    guesses1: number[];
    guesses2: number[];
    winGuesser: string;
    time: string;
}
