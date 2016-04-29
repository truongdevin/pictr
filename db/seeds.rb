# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(full_name: "guest", username: "guest", password: "password")
jenn = User.create!(full_name: "jenn", username: "jenn", password: "password")
dev = User.create!(full_name: "dev", username: "dev", password: "password")
brandon = User.create!(full_name: "brandon", username: "brandon", password: "password")
teja = User.create!(full_name: "teja", username: "teja", password: "password")
lianna = User.create!(full_name: "lianna", username: "lianna", password: "password")

p1 = Post.create!(user_id: brandon.id, image_url: "http://i.imgur.com/zID1JaY.jpg")
p2 = Post.create!(user_id: jenn.id, image_url: "http://i.imgur.com/BbQtjVN.jpg")
p3 = Post.create!(user_id: teja.id, image_url: "http://i.imgur.com/0MLPCux.jpg")
p4 = Post.create!(user_id: jenn.id, image_url: "http://i.imgur.com/YcDszjN.png")
p5 = Post.create!(user_id: brandon.id, image_url: "http://i.imgur.com/IAoRZe9.jpg")
p6 = Post.create!(user_id: teja.id, image_url: "http://i.imgur.com/EKKIKYD.jpg")
p7 = Post.create!(user_id: dev.id, image_url: "http://i.imgur.com/7MR533g.jpg")


c1 = Comment.create!(user_id: jenn.id, post_id: p7.id, body: "OMG looks good!")
c2 = Comment.create!(user_id: lianna.id, post_id: p7.id, body: "ikr. tfti")

r1 = Relationship.create!(follower_id: jenn.id, followed_id: dev.id)
r2 = Relationship.create!(follower_id: brandon.id, followed_id: dev.id)
r3 = Relationship.create!(follower_id: teja.id, followed_id: dev.id)
