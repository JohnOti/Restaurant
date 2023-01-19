class FavoriteRestaurant < ApplicationRecord
    has_secure_password

    has_many :customers, through: :reservations
    has_many :reservations
    has_many :menus
    has_many :favorites
    belongs_to :location
    has_many :reviews, through: :customers
    has_many :ratings, through: :customers
    has_many :orders

    validates :password, length: { minimum: 6 }
    validates :name, uniqueness: true, presence: true

end
