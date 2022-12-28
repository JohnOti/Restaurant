class FavoriteRestaurantSerializer < ActiveModel::Serializer
  attributes :name, :image, :location_id, :reviews, :ratings, :menus
end
