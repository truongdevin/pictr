# Pictr (Work In Progress)

[Heroku link][heroku]

[heroku]: https://pictr-app.herokuapp.com/

## Minimum Viable Product

Pictr is a web application inspired by Instagram/Flickr that will be build using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, allow users to do the following:

- [x] Create new account, login, logout, and guest login
- [x] Upload and display photos
- [x] Create and delete comments on photos
- [ ] Follow users
- [ ] Like photos
- [ ] Browse a CSS styled website that is satisfactorily visually appealing


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days) [0.5 days elapsed]

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Post Model, API, and basic APIUtil (1.5 days) [2.0 days elapsed]

**Objective:** Posts can be created, read, and destroyed through
the API. Will implement drag and drop in future.

- [x] create `Post` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for notes (`PostsController`)
- [x] jBuilder views for posts
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days) [3.5 days elapsed]

**Objective:** Posts can be created with the user interface and can display.
All photos by all users will display on the screen. Will insert photos by url.
Will be implementing drag and drop upload in future.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `PictureHeader`, shows poster name and time upload time
  - [x] `Picture`
  - [x] `CommentBox`, leave empty for now.

### Phase 4: Page Layout (0.5 days) [4.0 days elapsed]

**Objective:** Existing pages (including singup/signin) will look good.

- [x] ensure current layout is appropriate
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Proper upload (0.5 day) [4.5 days elapsed]

**Objective:** Allows users to upload photos instead of entering url.

- [x] Set up Cloudinary.
- [x] Can upload photo by dragging and dropping photo onto a box.

### Phase 6: Comments (0.5 day) [5.0 days elapsed]

**Objective:** Posts have many Comments.

- [x] create `Comment` model
- build out API, Flux loop, and components for:
  - [x] Comment CRUD
  - [x] Integrate Comment into `CommentBox`
- Use CSS to style new views


### Phase 7: User Stores and basic APIUtil (0.5 day) [5.5 days elapsed]

**Objective:** Users can be read through the API.

- [x] setup Flux
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 9: User search (1 day) [6.5 days elapsed]

**Objective:** Show user and follow/unfollow button when using search bar.

- [x] Drop down bar displays matching users
- [ ] Functional follow/unfollow button

### Phase 10: Follows (1.0 day) [7.5 days elapsed]

**Objective:** Users have many Follows.

- [ ] create `Follow` model
- build out API, Flux loop, and components for:
  - [ ] Like CRUD
- Use CSS to style new views

### Phase 11: Display correct posts (0.5 days) [8.0 days elapsed]

**Objective:** Only posts by followed users will display.
Will insert photos by url. Will be implementing drag and drop upload in future.

- [ ] change the logic regarding which posts are fetched depending on followed

### Phase 12: Likes (0.5 day) [8.5 days elapsed]

**Objective:** Posts have many Likes.

- [ ] create `Like` model
- build out API, Flux loop, and components for:
- [ ] Like CRUD
- [ ] Integrate Like into `CommentBox`
- Use CSS to style new views

### Bonus Features (TBD)
- [ ] Infinite Scrolling
- [ ] Show user page when clicking their names from front page
- [ ] Clicking photos in a user page brings up modal with photo, comments, and likes
- [ ] Allow upload of profile picture

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
