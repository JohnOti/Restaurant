class RemoveFavoriteRestaurantIdFromOrderItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :favorite_restaurant_id, :integer
  end
end
