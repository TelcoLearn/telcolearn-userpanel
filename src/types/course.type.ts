export interface ICourse {
    id?: number;
    image: string | any;
    title: string;
    description: string;
    price: number
    isPublished: boolean;
    category: string;
    totalChapters: number;
    createdBy: string;
}

export interface ISection {
    name: string;
    chapter: IChapter[]
}
export interface IChapter {
    id: number;
    chapter: string;
    chapterTitle: string;
    content: string;
    url: string;
}