class Menu < ApplicationRecord
    belongs_to :favorite_restaurant
    has_many :orders
end
