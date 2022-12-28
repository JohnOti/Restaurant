class FavoriteRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location_id, :reviews, :ratings, :menus
end
