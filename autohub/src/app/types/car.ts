import { Post } from "./post";
import { User } from "./user";

export interface Theme {
    make: string;                // Manufacturer of the car (e.g., Toyota, Ford)
    likes: string[]; //TODO User[]
    model: string;               // Model of the car (e.g., Camry, Mustang)
    year: string;              // Manufacturing year of the car;
    imgUrl: string;
    mileage: string;                                                // Optional: Mileage in kilometers or miles
    fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'; // Type of fuel used
    price: string;                                                 // Optional: Price of the car;
    located: string;
    posts:Post[];
    userId: User;                 
    created_at: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

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