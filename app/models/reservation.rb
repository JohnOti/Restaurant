class Reservation < ApplicationRecord
    
    belongs_to :favorite_restaurant
    has_many :customers, through: :favorite_restaurant
    
   end
