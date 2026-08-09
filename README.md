# Week 8: CommunityHub (React Frontend)

## Authors
- **Gilbert Mungai** (Team Lead) - [@dream333wxrld-juice](https://github.com/dream333wxrld-juice)
- **Trevor Wachira** - [@TrevorWachira690](https://github.com/TrevorWachira690)
- **Christine Wambui** - [@kaywambui-1](https://github.com/kaywambui-1)
- **Date:** August 9, 2026

## Project Description
CommunityHub is a team-built community platform frontend, developed in React as part of IYF Season 11's flagship project (Weeks 8-12). This repo covers the Week 8 milestone: a working React app with a post feed, post creation, user profiles, and site layout, all wired together with shared state.

## Technologies Used
- React
- Vite
- JavaScript (JSX)
- CSS3

## Features
- Header with logo, navigation, and login button placeholder
- Sidebar with About, Popular Posts, and Tags sections
- PageLayout component wrapping Header and Footer around page content
- Post feed (PostList) with search/filter by title
- PostCard showing title, excerpt, author, date, likes, with like and delete actions
- CreatePost form that adds new posts to the shared feed
- UserCard and UserProfile components displaying member info
- Footer with navigation links and copyright
- Shared `posts` state lifted to App.jsx so all post-related components stay in sync

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the local server URL shown in your terminal (usually `http://localhost:5173`)

## Team Workflow
All work happened via feature branch -> Pull Request -> teammate review -> merge, with branch protection enforced on `main`. See `CONTRIBUTORS.md` for full team roles and individual contributions.

## Lessons Learned
Coordinating a shared component structure across three people up front made integration much smoother than expected. Agreeing on prop shapes (e.g. `post`, `onLike`, `onDelete`) before building let each feature come together without major rework when it was time to wire everything into App.jsx.

## Challenges Faced
We ran into a few Git-related hurdles as a team: a merge conflict between an auto-generated GitHub README and the Vite-generated one, and a duplicated nested project folder from cloning into an already-existing directory. Working through branch protection and PR reviews also took some initial adjustment, but it gave us a clear, traceable history of who built what.

## Screenshots
_Not included._

## Live Demo
http://localhost:5173/