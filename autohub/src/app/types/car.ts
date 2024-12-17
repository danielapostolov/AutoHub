export interface Car {
    make: string;                // Manufacturer of the car (e.g., Toyota, Ford)
    model: string;               // Model of the car (e.g., Camry, Mustang)
    year: number;                // Manufacturing year of the car
    color?: string;              // Optional: Color of the car
    mileage?: number;            // Optional: Mileage in kilometers or miles
    isElectric: boolean;         // Indicates if the car is electric
    fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'; // Type of fuel used
    transmission: 'manual' | 'automatic' | 'semi-automatic'; // Transmission type
    numberOfDoors: number;       // Number of doors (e.g., 2, 4, 5)
    price?: number;              // Optional: Price of the car
    postOwner: string;
}