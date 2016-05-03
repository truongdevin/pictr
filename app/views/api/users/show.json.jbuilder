json.extract! @user, :id, :username, :full_name
json.posts @user.posts, :image_url, :id
