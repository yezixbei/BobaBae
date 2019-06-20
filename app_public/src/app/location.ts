class OpeningTimes {
    days: string;
    opening: string;
    closing: string;
    closed: boolean;
}

export class Review {
    author: string;
    rating: number;
    reviewText: string;
}

export class Location {
    _id: string;
    name: string;
    address: string;
    rating: number;
    bobaQualities: string[];
    distance: number;
    coords: number[];
    openingTimes: OpeningTimes;
    reviews: Review[];
}