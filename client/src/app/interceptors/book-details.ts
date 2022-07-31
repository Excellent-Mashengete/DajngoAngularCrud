export interface BookDetails {
    id: number;
    isbn: BigInt;
    title: string;
    description: string;
    pubdate: Date;
    pubid: number;
    authorid: number;
    cost: number;
    created_at: Date;
    updated_at:Date;
}
