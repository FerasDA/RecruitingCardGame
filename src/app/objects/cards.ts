export interface CardInterface {
    number: FaceValue | number;
    suit: Suits;
    color: Color;
}

export enum FaceValue {
    Ace = 1,
    Jack = 11,
    Queen = 12,
    King = 13
}

export enum Suits {
    Spades,
    Diamonds,
    Clubs,
    Hearts
}

export enum Color {
    Red,
    Black
}
