# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Implemented real-time post updates using Pusher.js.
- Added real-time post deletion to the admin dashboard.
- Added comment functionality to blog posts.

### Changed
- Used `remark` to parse and render Markdown content for blog posts.
- Styled the post slug page to match the rest of the application.
- Standardized the size of `ArticleCard` components.
- Implemented dynamic categories on the homepage.
- Allowed anonymous commenting on posts by removing session requirement.

### Fixed
- Fixed 405 'Method Not Allowed' error on admin login by correctly configuring NextAuth.js for App Router.
- Prevented stripping of whitespace and newlines from post content upon saving.
- Ensured whitespace and newlines are preserved when editing existing posts.
- Corrected post fetching in API to use database ID instead of slug for consistency.
- Awaited `params` in API routes to correctly access dynamic route parameters.
- Fixed Prisma validation error by removing `description` from `connectOrCreate` for categories in PUT route.
- Converted post ID to integer in PUT API route to match Prisma's expected type.
- Corrected duplicate content and `"use client";` directive placement in `src/app/(app)/post/[slug]/page.jsx`.
- Wrapped `SessionProvider` in a client component to resolve "React Context is unavailable in Server Components" error.
