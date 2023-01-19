class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :favorite_restaurant_id, :menu_id
end
