import { formatCreatedDate } from "./helpers"

export const mapNodeToPost = (node: any): Post => {
    return {
        id: node.number.toString(),
        title: node.title,
        createdAt: node.createdAt,
        createAtPretty: formatCreatedDate(node.createdAt),
        body: node.body,
        bodyHTML: node.bodyHTML,
        customHTML: node.customHTML
    }
}

export const mapStaticNodeToPost = (node: any): Post => {
    console.log("wowza" + node)
    return {
        id: node.id,
        title: node.frontmatter.title,
        createdAt: node.frontmatter.date,
        createAtPretty: node.frontmatter.date,
        body: node.html,
        bodyHTML: node.html,
        customHTML: node.html
    }
}

export type Post = {
    id: string,
    title: string,
    createdAt: string,
    createAtPretty: string,
    body: string,
    bodyHTML: string,
    customHTML: string
}