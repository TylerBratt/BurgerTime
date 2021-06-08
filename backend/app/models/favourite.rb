class Favourite < ActiveRecord::Base
  has_many :users
  has_many :burgers

  validates :user_id, presence: true
  validates :burger_id, presence: true
end
