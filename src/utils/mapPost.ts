import { formatCreatedDate } from "./helpers"

export const mapNodeToPost = (node: any): Post => {
    return {
        id: node.number.toString(),
        title: node.title,
        createdAt: node.createdAt,
        createAtPretty: formatCreatedDate(node.createdAt),
        body: node.body,
        bodyHTML: node.bodyHTML
    }
}

export type Post = {
    id: string,
    title: string,
    createdAt: string,
    createAtPretty: string,
    body: string,
    bodyHTML: string
}