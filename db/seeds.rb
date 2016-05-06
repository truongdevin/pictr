# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(full_name: "guest", username: "guest", password: "password")
jenn = User.create!(full_name: "Jenn Im", username: "imjennim", password: "password")
jon = User.create!(full_name: "Jon Snow", username: "jonknowsnothing", password: "password")
brandon = User.create!(full_name: "Brandon Stark", username: "bran_stark", password: "password")
jimmy = User.create!(full_name: "Jimmy McGill", username: "saulgoodman", password: "password")
lianna = User.create!(full_name: "Lyanna Stark", username: "who_am_i", password: "password")
matt = User.create!(full_name: "Matt Murdock", username: "blind_justice27", password: "password")

p3 = Post.create!(user_id: jenn.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462333780/sweet2.jpg")
p4 = Post.create!(user_id: brandon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462333987/seed1.jpg")
p16 = Post.create!(user_id: lianna.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337694/cute4.jpg") #cat
p2 = Post.create!(user_id: jenn.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1461965770/sweet1.png")
p17 = Post.create!(user_id: brandon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337735/cute5.jpg") #bran's wolf
p1 = Post.create!(user_id: lianna.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462000578/dusky.jpg")
p13 = Post.create!(user_id: brandon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337665/cute2.jpg") #fat hamster
p14 = Post.create!(user_id: jon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337678/cute3.png") #baby ghost
p8 = Post.create!(user_id: jon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337566/sweet6.jpg")
p18 = Post.create!(user_id: jimmy.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337753/savory1.jpg")
p19 = Post.create!(user_id: jimmy.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337782/savory2.jpg")
p5 = Post.create!(user_id: brandon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337532/sweet3.jpg")
p6 = Post.create!(user_id: jon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337542/sweet4.jpg")
p11 = Post.create!(user_id: jimmy.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337631/sweet9.jpg") #orea
p12 = Post.create!(user_id: lianna.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337660/cute1.jpg") #cat
p7 = Post.create!(user_id: jon.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337553/sweet5.jpg")
p9 = Post.create!(user_id: jimmy.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337590/sweet7.jpg")
p10 = Post.create!(user_id: jimmy.id, image_url: "http://res.cloudinary.com/diy3hv57b/image/upload/v1462337617/sweet8.jpg")


c1 = Comment.create!(user_id: jenn.id, post_id: p4.id, body: "OMG looks good!")
c2 = Comment.create!(user_id: lianna.id, post_id: p4.id, body: "ikr. tfti")
c3 = Comment.create!(user_id: brandon.id, post_id: p5.id, body: "Jon! Let's get this next time you come home? :)")
c4 = Comment.create!(user_id: jon.id, post_id: p5.id, body: "For sure! I'm sure it'll make arya jealous haha.")

c5 = Comment.create!(user_id: jimmy.id, post_id: p10.id, body: "Man this was delicious! Made it myself. Anyone want to buy? ;P")
Comment.create!(user_id: jon.id, post_id: p10.id, body: "Haha of course you'd be charging. Looks really good man!")
Comment.create!(user_id: jimmy.id, post_id: p10.id, body: "I'll give you a discount. jk! Come visit me one of these days! I'll make some for you and bran.")
Comment.create!(user_id: brandon.id, post_id: p10.id, body: "OMG looks good. Thanks Uncle Jimmy!")

c6 = Comment.create!(user_id: brandon.id, post_id: p13.id, body: "So fat!")
Comment.create!(user_id: lyanna.id, post_id: p13.id, body: "Keep eating those all those sweets and you'll become like that too! :P")

c7 = Comment.create!(user_id: jon.id, post_id: p14.id, body: "Found this old pic of ghost on my camera")
Comment.create!(user_id: jenn.id, post_id: p14.id, body: "Awww he was so cuteee! He's all big and fearsome now. Still cuddly though!")

c9 = Comment.create!(user_id: jenn.id, post_id: p11.id, body: "lol did you make that yourself, jimmy? :P")
c10 = Comment.create!(user_id: jimmy.id, post_id: p11.id, body: "I'll have you know these fake oreos were made with extreme care!")

c11 = Comment.create!(user_id: jimmy.id, post_id: p19.id, body: "Look what kim made me this morning! Luckiest guy on the planet!")
c12 = Comment.create!(user_id: jon.id, post_id: p19.id, body: "dude that looks delicious. gotta make some of that for me next time")

c13 = Comment.create!(user_id: jon.id, post_id: p18.id, body: "that looks like a heart attack waiting to happen.... i'd still eat it though lol")

c14 = Comment.create!(user_id: jon.id, post_id: p9.id, body: "Dang. Why so many? Brining a judge?")
Comment.create!(user_id: matt.id, post_id: p9.id, body: "I hope you guys are joking. We're lawyers, man!")
Comment.create!(user_id: jimmy.id, post_id: p9.id, body: "Hahaha nah don't worry, Matt. I'm not quite that ambitious.")


r1 = Relationship.create!(follower_id: guest.id, followed_id: jenn.id)
r2 = Relationship.create!(follower_id: guest.id, followed_id: jon.id)
r3 = Relationship.create!(follower_id: guest.id, followed_id: brandon.id)
