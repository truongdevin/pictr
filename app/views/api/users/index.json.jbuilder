json.array! @users do |user|
  json.extract! user, :id, :username, :full_name
  json.posts user.posts, :image_url, :id
  json.relationships user.relationships, :followed_id, :id
  json.reverse_relationships user.reverse_relationships, :follower_id


  # json.followed_users user.followed_users, :username
  # json.followers user.followers, :username


  # long way below
  # json.followed_users do
  #   json.array! user.followed_users do |followed_user|
  #     json.username followed_user.username
  #   end
  # end

  # json.followers do
  #   json.array! user.followers do |follower|
  #     json.username follower.username
  #   end
  # end
end
