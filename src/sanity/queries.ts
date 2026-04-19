export const projectsQuery = `*[_type == "project"] | order(order asc, name asc) {
  _id,
  name,
  description,
  url,
  sourceCodeLink,
  image,
  tags,
  type
}`;

export const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  cvUrl,
  cvFilename,
  "cvFile": cvFile{
    asset->{
      url,
      originalFilename
    }
  }
}`;
