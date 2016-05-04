json.extract! @post, :id, :user_id, :image_url
json.age time_ago_in_words(@post.created_at)
json.user @post.user, :username, :id
json.likes @post.likes, :id, :post_id, :user_id
