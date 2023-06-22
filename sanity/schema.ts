import { type SchemaTypeDefinition } from 'sanity'
import { product } from "./product_schema"
import { category } from './category_schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}
