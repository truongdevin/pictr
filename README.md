# Pictr (Work In Progress)

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Pictr is a web application inspired by Instagram/Flickr that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, allow users to do the following:

- [ ] Create new account, login, logout, and guest login
- [ ] Upload and display photos
- [ ] Follow users
- [ ] Like photos
- [ ] Create and delete comments on photos
- [ ] Browse a CSS styled website that is satisfactorily visually appealing


## Product Goals and Priorities

FresherNote will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete notes (MVP)
- [ ] Organize notes within Notebooks (MVP)
- [ ] Tag notes with multiple tags (expected feature, but not MVP)
- [ ] Apply complex styling to notes while editing (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Post Model, API, and basic APIUtil (1.5 days)

**Objective:** Posts can be created, read, and destroyed through
the API. Will implement drag and drop in future.

- [ ] create `Post` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`PostsController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Posts can be created with the user interface and can display.
All photos by all users will display on the screen. Will insert photos by url.
Will be implementing drag and drop upload in future.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `PictureHeader`, shows poster name and time upload time
  - [ ] `Picture`
  - [ ] `CommentBox`, leave empty for now.

### Phase 4: Display correct posts (0.5 days)

**Objective:** Only posts by followed users will display.
Will insert photos by url. Will be implementing drag and drop upload in future.

- [ ] change the logic regarding which posts are fetched depending on followed

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: Comments (1 day)

**Objective:** Posts have many Comments.

- [ ] create `Comment` model
- build out API, Flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] Integrate Comment into `CommentBox`
- Use CSS to style new views

### Phase 6: Likes (1 day)

**Objective:** Posts have many Likes.

- [ ] create `Like` model
- build out API, Flux loop, and components for:
  - [ ] Like CRUD
  - [ ] Integrate Like into `CommentBox`
- Use CSS to style new views

### Phase 7: User Stores and basic APIUtil (0.5 day)

**Objective:** Users can be read through the API.

- [ ] setup Flux
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 8: User search (1 day)

**Objective:** Show user and follow/unfollow button when using search bar.

- [ ] Drop down bar displays matching users
- [ ] Functional follow/unfollow button

### Phase 9: Proper upload (1 day)

**Objective:** Allows users to upload photos instead of entering url.

- [ ] Can upload photo by dragging and dropping photo onto a box.

### Phase 10: User show (1 day)

**Objective:** Show user when clicking on their names from main page.

- [ ] Displays all their pictures
- [ ] Functional follow/unfollow button
- [ ] Clicking a photo shows all the comments and likes.


### Phase 11: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Allow upload of profile picture
- [ ] Infinite Scrolling

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
