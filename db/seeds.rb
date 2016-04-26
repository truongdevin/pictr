# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password")
jenn = User.create!(username: "jenn", password: "password")
dev = User.create!(username: "dev", password: "password")
brandon = User.create!(username: "brandon", password: "password")
teja = User.create!(username: "teja", password: "password")

p1 = Post.create!(user_id: brandon.id, image_url: "images.google.com/brandon")
p2 = Post.create!(user_id: brandon.id, image_url: "images.google.com/cats")
p3 = Post.create!(user_id: jenn.id, image_url: "images.google.com/jenn")
p4 = Post.create!(user_id: jenn.id, image_url: "images.google.com/jenniscool")
p5 = Post.create!(user_id: teja.id, image_url: "images.google.com/teja")
p6 = Post.create!(user_id: teja.id, image_url: "images.google.com/croissants_suck")
