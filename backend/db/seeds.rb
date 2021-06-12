# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require('faker')

puts "Re-creating Fake Users ..."

User.destroy_all
Favourite.destroy_all
Comment.destroy_all
NewBurger.destroy_all
#Burgerlike.destroy_all

3.times do
  User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::Internet.password, address: Faker::Address.full_address)
end

puts "Adding Fake Favourites"

favourites = Favourite.create([{user_id: 2, burger_id: 10}, {user_id: 2, burger_id: 55}, {user_id: 1, burger_id: 102}])

puts "Adding Fake Comments"

comments = Comment.create([{full_name: "Kent C Strait", burger_id: 125, comment: "I paid how much???  For This??"}, {full_name: "Willi Makeit", burger_id: 125, comment: "Not a lot of bang for the money"}, {full_name: "Dwight Shrutt", burger_id: 126, comment: "Best burger ever"}])

puts "Adding Fake Likes/Dislikes"

burgerlikes = Burgerlike.create([{burger_id: 125, likes: 32, dislikes: 1}, {burger_id: 126, likes: 3, dislikes: 120}, {burger_id: 127, likes: 234, dislikes: 3}])

# 150.times do |n|
#   Burgerlike.create!([{burger_id: Faker::125, likes: 32, dislikes: 1}, {burger_id: 126, likes: 3, dislikes: 120}, {burger_id: 127, likes: 234, dislikes: 3}])
# end

new_burgers = NewBurger.create!([{name: "Cheeseburger", restaurant: "BOBBY's", restaurantID:505, brand:'', web: "www.google.com", image:"", description:"Home of the big bad beef & bison bacon bougie burger", ingredients:"beef, bison, bacon, brisket, bun", optionals:"", isVegetarian: false, addressID:0, number:"643", line1:"fake st", line2:"flavourtown", postalCode:"a1a1a1", country:"canada"}])
