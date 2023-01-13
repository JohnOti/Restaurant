class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :favorite_restaurant_id, :customer_id, :comments
end
