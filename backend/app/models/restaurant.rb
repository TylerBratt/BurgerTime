class Restaurant < ActiveRecord::before_save
  validates :burger_id, presence: true
  # validates :like
  # validates :comment
end
