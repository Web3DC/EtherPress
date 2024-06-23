import { IResource } from './resource';

export interface ILatestResources {
    title: string; 
    resources: IResource[];
    readMoreTitle: string;
    readMoreRef: string;
}