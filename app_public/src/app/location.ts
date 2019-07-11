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

export class MenuItem {
    name: string;
    price: number;
    imageURL: string;
    description: string;
    flavors: string[];
}

export class Location {
    _id: string;
    name: string;
    address: string;
    coords: number[];
    distance: number;
    openingTimes: OpeningTimes[];
    imageURL: string;
    menu: MenuItem[];
    rating: number;
    reviews: Review[];
    bobaQualities: string[];
}