# Pictr

[Pictr](https://pictr-app.herokuapp.com/)

Pictr is a full-stack web application inspired by Instagram. It utilizes Ruby on Rails on the backend,
a PostgresSQL database, and React.js with a Flux architectural framework on the frontend.

## Features

Pictr allows users to:

- Create a unique account
- Browse the site with a guest account
- Follow and unfollow users
- Create and read posts.
- Like posts.
- Create and destroy Comments

## Implementation Details

### Feed based on user follows
The feed only displays posts from users that the current user is following, with most recent first.
This feature is implemented at the controller level in the backend rails application.

```Ruby
def index
  subquery = Relationship.select("followed_id").where("follower_id = ?", current_user.id)
  @posts = Post.includes(:user, :likes, {comments: :user})
    .where("user_id IN (#{subquery.to_sql}) OR user_id = ?", current_user.id).limit(3 * count).order(id: :desc)
  render :index
end
```

### Infinite Scrolling
In order to prevent long load times, the feed only initially displays 3 posts. Upon scrolling to the bottom
of the page, 3 more images are quickly fetched and added to the page. This feature is implemented by placing
a listener on the document that checks if the window is being scrolled.

```Javascript
  this.infiniteListener = window.addEventListener("scroll",this.addPosts);
```

Each time the window reaches the bottom, a counter variable is incremented and more posts are fetched.

```Javascript
if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  this.state.scrollCount += 1;
  ClientActions.fetchPosts(this.state.scrollCount);
}
```
## Photos

### Login Page
![Login](/docs/images/login_page.png)

### Feed
![Feed](/docs/images/feed.png)

### Search
![Search](/docs/images/search.png)

### User Page
![User Page](/docs/images/user_page.png)


### Future Directions for the Project
- Edit images with filters
- Add video support
- Add notifications
