class MenuSerializer < ActiveModel::Serializer
  attributes :cuisine, :price, :favorite_restaurant_id, :image, :ingredients
end
