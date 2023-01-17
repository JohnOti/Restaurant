class OrderItem < ApplicationRecord

    belongs_to :reservation
    belongs_to :customer
    belongs_to :menu
end
