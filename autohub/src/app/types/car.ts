export interface Theme {
    make: string;                // Manufacturer of the car (e.g., Toyota, Ford)
    likes: string[]; 
    model: string;               // Model of the car (e.g., Camry, Mustang)
    year: number;              // Manufacturing year of the car;
    mileage: number;            // Optional: Mileage in kilometers or miles
    fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'; // Type of fuel used
    price?: number;            // Optional: Price of the car;
    description: string;
    owner: string; //TODO User type/model
    __v: number;
    _id: string;
}

// transmission: 'manual' | 'automatic' | 'semi-automatic'; // Transmission type
