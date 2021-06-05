class User < ActiveRecord::Base

  has_many :restaurants
  
  has_secure_password
  validates :email, :uniqueness => { :case_sensitive => false }
  validates :email, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :password_digest, presence: true
  validates :address, presence: true
  before_save { self.email.downcase!}

end
