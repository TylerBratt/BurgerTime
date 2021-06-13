class Burgerlike < ActiveRecord::Base

  validates :burger_id, presence: true
  validates :likes, presence: true
  validates :dislikes, presence: true


end
