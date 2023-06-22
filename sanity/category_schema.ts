import { defineField, defineType } from "sanity"

export const category = defineType({
    name: 'category',
    title: 'Product Category',
    type: 'document',
    fields: [
        defineField({
        name: 'name',
        title: 'Category Name',
        type: 'string'
        })
    ]

})
