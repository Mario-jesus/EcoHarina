export interface PageHeroI {
    page?: string;
    title: string;
    subtitle: string;
    carousel: boolean;
    images: {
        id: number;
        image: string;
        name: string;
    }[];
}
