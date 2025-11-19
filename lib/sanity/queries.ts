import { groq } from 'next-sanity';

// Query to get all published posts
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  mainImage,
  categories,
  publishedAt,
  excerpt,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`;

// Query to get a single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  mainImage,
  categories,
  publishedAt,
  excerpt,
  body,
  seo,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`;

// Query to get posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && $category in categories] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  mainImage,
  categories,
  publishedAt,
  excerpt,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`;

// Query to get all unique categories
export const categoriesQuery = groq`array::unique(*[_type == "post"].categories[])`;
