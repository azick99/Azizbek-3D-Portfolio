import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'cvUrl',
      title: 'CV download URL',
      type: 'url',
      description:
        'Direct link to your PDF (Dropbox, Drive, etc.). Ignored if you upload a file below.',
    }),
    defineField({
      name: 'cvFile',
      title: 'CV file upload',
      type: 'file',
      options: { accept: '.pdf' },
      description: 'Uploaded PDF overrides CV URL when present.',
    }),
    defineField({
      name: 'cvFilename',
      title: 'Download file name',
      type: 'string',
      description: 'Optional. Example: Azizbek-Yunusaliev-CV.pdf',
    }),
  ],
})
