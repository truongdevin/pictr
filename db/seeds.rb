# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")

test = User.create!(username: "test", password: "password")

dev = User.create!(username: "dev", password: "password")

brandon = User.create!(username: "brandon", password: "password")

picture1 = Post.create!(user_id: brandon.id, image_url: "images.google.com/brandon")
picture2 = Post.create!(user_id: brandon.id, image_url: "images.google.com/cats")
