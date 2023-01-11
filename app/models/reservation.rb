class Reservation < ApplicationRecord
    has_many :customers, through: :favorite_restaurants
    belongs_to :favorite_restaurant
    
   end
