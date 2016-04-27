json.extract! @post, :id, :user_id, :image_url, :created_at
json.user @post.user, :username
