class FavoriteSerializer < ActiveModel::Serializer
  attributes :id,  :customer_id,  :favorite_restaurant_id
end
