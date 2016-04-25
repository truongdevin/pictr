# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments

- `GET /api/posts/:id/comments`
- `POST /api/posts/:id/comments`
- `GET /api/posts/:id/comments/:id`
- `PATCH /api/posts/:id/comments/:id`
- `DELETE /api/posts/:id/comments/:id`

### Likes

- `GET /api/posts/:id/likes`
- `POST /api/posts/:id/likes`
- `DELETE /api/posts/:id/likes/:id`
