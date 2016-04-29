json.array! @users do |user|
  json.extract! user, :id, :username, :full_name

  json.followed_users do
    json.array! user.followed_users do |followed_user|
      json.username followed_user.username
    end
  end

end


# json.array! @posts do |post|
#   json.extract! post, :id, :user_id, :image_url, :created_at
#   json.user post.user, :username
#
#   json.comments do
#     json.array! post.comments do |comment|
#       json.body comment.body
#       json.id comment.id
#       json.user comment.user, :username
#     end
#   end
# end
