import { Theme } from "./car";
import { User } from "./user";

export interface Post {
    likes: User[];
    _id: string;
    text: string;
    userId: User;
    themeId: Theme;
    created_at: string;
    updatedAt: string;
    __v: number;
}