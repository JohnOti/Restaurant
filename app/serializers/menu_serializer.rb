class MenuSerializer < ActiveModel::Serializer
  attributes :id, :cuisine, :price, :favorite_restaurant_id, :image, :ingredients
end
