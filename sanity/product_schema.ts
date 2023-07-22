import { defineField } from "sanity";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
      image: "image"
    },
    {
      name: "altimages",
      title: "More product images",
      type: "array",
      of:[ 
        {
          type: "image"
        },
        ]
    },
    {
      name: "description",
      type: "string",
      title: "Product Description",
    },
/*    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        { type: "string" }
      ],

    },
*/   
    {
      name: "price",
      type: "string",
      title: "Price",
    },
    defineField({
      name: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
      title: "Product Category",
    }),
  ],
};
