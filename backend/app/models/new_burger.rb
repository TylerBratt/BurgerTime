class NewBurger < ActiveRecord::Base

  validates :name, presence: true
  validates :restaurant, presence: true
  validates :restaurantID, presence: true
  validates :web, presence: true
  validates :description, presence: true
  validates :ingredients, presence: true
  validates :addressID, presence: true
  validates :number, presence: true
  validates :line1, presence: true
  validates :line2, presence: true
  validates :postalCode, presence: true
  validates :country, presence: true

end
