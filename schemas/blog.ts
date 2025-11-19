import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Article de Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Auteur',
            type: 'string',
            initialValue: 'Obsidian Partners',
        }),
        defineField({
            name: 'mainImage',
            title: 'Image principale',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texte alternatif',
                },
            ],
        }),
        defineField({
            name: 'categories',
            title: 'Catégories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Intelligence Artificielle', value: 'ia' },
                    { title: 'Transformation Digitale', value: 'transformation' },
                    { title: 'Stratégie', value: 'strategie' },
                    { title: 'Cas Clients', value: 'cas-clients' },
                    { title: 'Actualités', value: 'actualites' },
                ],
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Extrait',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'body',
            title: 'Contenu',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Citation', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Gras', value: 'strong' },
                            { title: 'Italique', value: 'em' },
                            { title: 'Code', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Lien',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Texte alternatif',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    validation: (Rule) => Rule.max(60),
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    validation: (Rule) => Rule.max(160),
                },
                {
                    name: 'keywords',
                    title: 'Mots-clés',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `par ${author}` };
        },
    },
});
