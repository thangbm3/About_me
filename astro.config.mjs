import { defineConfig } from 'astro/config';

// Works for both a <username>.github.io repository and a normal project repo.
// GitHub Actions sets GITHUB_REPOSITORY = "owner/repo" during deployment.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isProfileSite = Boolean(owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`);
const site = owner ? `https://${owner}.github.io` : 'https://example.github.io';
const base = isProfileSite || !repo ? '/' : `/${repo}/`;

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
});
