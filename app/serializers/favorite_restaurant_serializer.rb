class FavoriteRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location_id, :menus
end
