export interface ICourse {
    image: string | any;
    title: string;
    description: string;
    price: number
    isPublished: boolean;
    category: string;
    totalChapters: number;
    createdBy: string;
}