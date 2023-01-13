class RatingSerializer < ActiveModel::Serializer
  attributes :id, :favorite_restaurant_id, :customer_id, :rating
end
