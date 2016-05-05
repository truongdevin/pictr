json.extract! @post, :id, :user_id, :image_url, :created_at
json.user @post.user, :username
json.comments @post.comments, :body, :id
json.likes @post.likes, :id, :post_id, :user_id
