json.extract! @user, :id, :username, :full_name
json.relationships @user.relationships, :id, :followed_id
