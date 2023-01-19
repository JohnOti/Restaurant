class FavoriteRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image,:menus, :location_id, :orders, :reservations
end
