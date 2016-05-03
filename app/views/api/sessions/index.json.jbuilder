json.extract! @user, :id, :username, :full_name
json.followed_users @user.followed_users, :id, :followed_id
json.likes @user.likes, :id, :post_id
