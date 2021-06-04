class Burger < ActiveRecord::Base
  validates :burger_API_id, presence: true
  validates :restaurant_id, presence: true
end
