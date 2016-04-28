json.array! @users do |user|
  json.extract! user, :id, :username, :full_name
end
