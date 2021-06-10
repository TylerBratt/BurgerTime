class Comment < ActiveRecord::Base
  has_many :burgers

  validates :full_name, presence: true
  validates :burger_id, presence: true
  validates :comment, presence: true

end
