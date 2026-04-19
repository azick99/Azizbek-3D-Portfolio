import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Live site URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourceCodeLink',
      title: 'Source / GitHub URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Screenshot',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Hashtags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Tag (without #)',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'CSS class',
              description:
                'Tailwind class used in the portfolio, e.g. blue-text-gradient, orange-text-gradient, pink-text-gradient, violet-text-gradient, green-text-gradient, yellow-text-gradient',
              type: 'string',
              initialValue: 'blue-text-gradient',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'color' },
          },
        },
      ],
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      description: 'Used for filtering projects in the portfolio',

      type: 'string',
      options: {
        list: [
          { title: 'New Projects', value: 'New Projects' },
          { title: 'Major Projects', value: 'Major Projects' },
          { title: 'Style Projects', value: 'Style Projects' },
          { title: 'Small and Sweet Projects', value: 'Small and Sweet Projects' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
