class FavoriteRestaurant < ApplicationRecord
    has_many :customers, through: :reservations
    has_many :reservations
    has_many :menus
    has_many :favorites
    belongs_to :location

end
