import type { Project, ProjectTag } from "../constants";
import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./imageUrl";
import { projectsQuery, siteSettingsQuery } from "./queries";

type SanityProjectDoc = {
  _id: string;
  name?: string;
  description?: string;
  url?: string;
  sourceCodeLink?: string;
  image?: unknown;
  tags?: { name?: string; color?: string }[];
  type?: string;
};

type SiteSettingsDoc = {
  cvUrl?: string;
  cvFilename?: string;
  cvFile?: { asset?: { url?: string; originalFilename?: string } | null };
};

export async function fetchSanityProjects(): Promise<Project[] | null> {
  if (!isSanityConfigured) return null;
  const client = getSanityClient();
  if (!client) return null;

  const rows = await client.fetch<SanityProjectDoc[]>(projectsQuery);
  if (!rows?.length) return [];

  return rows.map((row, index) => {
    const tags: ProjectTag[] = (row.tags ?? [])
      .filter((t) => t?.name)
      .map((t) => ({
        name: String(t.name),
        color: t.color?.trim() || "text-secondary",
      }));

    return {
      id: index + 1,
      name: row.name ?? "Untitled",
      description: row.description ?? "",
      image: urlForImage(row.image) || "",
      url: row.url ?? "#",
      source_code_link: row.sourceCodeLink ?? "#",
      tags,
      type: (row.type as Project["type"]) ?? "New Projects",
    };
  });
}

export type SiteCvSettings = {
  cvHref: string;
  downloadName: string;
};

const defaultCv: SiteCvSettings = {
  cvHref: "/Azizbek_Yunusaliev_cv.pdf",
  downloadName: "Azizbek Yunusaliev CV.pdf",
};

export async function fetchSiteCvSettings(): Promise<SiteCvSettings> {
  if (!isSanityConfigured) return defaultCv;
  const client = getSanityClient();
  if (!client) return defaultCv;

  const doc = await client.fetch<SiteSettingsDoc | null>(siteSettingsQuery);
  const fileUrl = doc?.cvFile?.asset?.url;
  const url = doc?.cvUrl?.trim();
  const cvHref = fileUrl || url || defaultCv.cvHref;
  const downloadName =
    doc?.cvFilename?.trim() ||
    doc?.cvFile?.asset?.originalFilename ||
    defaultCv.downloadName;
  return {
    cvHref,
    downloadName,
  };
}
