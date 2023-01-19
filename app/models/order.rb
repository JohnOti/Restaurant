class Order < ApplicationRecord
    belongs_to :customer
    belongs_to :favorite_restaurant
    belongs_to :menu
end
