
export interface UserCarProps {
    name: string;
    description?: string;
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

interface UserCommentsProps {
    name: string;
}

export interface CommentsData {
    id: string;
    createdAt: string;
    description: string;
    userId: string;
    carId: string;
    user: UserCommentsProps;
}