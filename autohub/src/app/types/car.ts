import { Post } from "./post";
import { User } from "./user";

export interface Theme {
    make: string;                // Manufacturer of the car (e.g., Toyota, Ford)
    likes: string[]; //TODO User[]
    model: string;               // Model of the car (e.g., Camry, Mustang)
    year: number;              // Manufacturing year of the car;
    imgUrl: string;
    mileage: number;                                                // Optional: Mileage in kilometers or miles
    fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'; // Type of fuel used
    price: number;                                                 // Optional: Price of the car;
    located: string;
    posts:Post[];
    userId: User;                 
    created_at: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

// make: string,
//     model: string,
//     year: string,
//     imgUrl: string,
//     mileage: number,
//     fuelType: string,
//     price: number,
//     located: string,

// transmission: 'manual' | 'automatic' | 'semi-automatic'; // Transmission type
//TODO


// export interface Theme {
//     make: string;                
//     likes: string[]; 
//     model: string;               
//     year: number;              
//     imgUrl: string;
//     mileage: number;                                                
//     fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'; 
//     price: number;                                                 
//     located: string;
// }