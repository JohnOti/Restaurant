class Reservation < ApplicationRecord
    
    belongs_to :favorite_restaurant
    belongs_to :customer
    has_many :order
    
   end
