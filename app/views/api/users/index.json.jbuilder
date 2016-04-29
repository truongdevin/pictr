json.array! @users do |user|
  json.extract! user, :id, :username, :full_name

  json.followed_users do
    json.array! user.followed_users do |followed_user|
      json.username followed_user.username
    end
  end

  json.followers do
    json.array! user.followers do |follower|
      json.username follower.username
    end
  end
end
