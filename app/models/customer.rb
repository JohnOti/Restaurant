class Customer < ApplicationRecord
    has_secure_password

    has_many :reservations
    has_many :favorite_restaurants, through: :reservations
    has_many :favorites
    has_many :ratings
    has_many :reviews

    

    validates :password, length: { minimum: 6 }
    validates :username, uniqueness: true, presence: true
end
