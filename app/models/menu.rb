class Menu < ApplicationRecord
    belongs_to :favorite_restaurant
    has_many :order_items
end
