export const siteUrl = "https://gmemc.co.kr";

export const sitePages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/company", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/project", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/careers", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
] as const;

export function absoluteUrl(path = "/") {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
