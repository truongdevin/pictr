json.extract! @comment, :id, :user_id, :post_id
json.user @comment.user, :username
