json.array! @users do |user|
  json.extract! user, :id, :username, :full_name
  json.posts user.posts, :image_url, :id
  json.followed_users user.followed_users, :followed_id, :id
  json.followers user.followers, :follower_id
end
