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


3.times do
  User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::Internet.password, address: Faker::Address.full_address)
end

puts "Adding Fake Favourites"

favourites = Favourite.create([{user_id: 2, burger_id: 10}, {user_id: 2, burger_id: 55}, {user_id: 1, burger_id: 102}])
