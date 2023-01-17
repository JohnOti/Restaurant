class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :customer_id, :price, :meal
end
