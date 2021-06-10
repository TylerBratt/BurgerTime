class Comment < ActiveRecord::Base
  has_many :burgers

  validates :user_id, presence: true
  validates :burger_id, presence: true
  validates :comment, presence: true

end
