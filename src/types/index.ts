
interface UserCarProps {
    name: string;
}

export interface CarProps {
    id: string;
    brand: string;
    year: number;
    color: string;
    milage: number;
    model: string;
    fuel: string;
    price: number;
    description: string;
    coverPhoto: string;
    gallery: string[];
    published: boolean;
    createAt: string;
    userId: string;
    user: UserCarProps
}