export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'user' }]
        },
        {
            title: 'Contents',
            name: 'contents',
            type: 'string'
        },
        {
            title: 'Photo',
            name: 'photo',
            type: 'image'
        },
        //bookmark 여부 -> true/false
        {
            title: 'Bookmark',
            name: 'bookmark',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'contents',
            media: 'photo'
        }
    }
}