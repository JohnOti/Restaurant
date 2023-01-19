class AddFavoriteRestaurantIdToOrderItem < ActiveRecord::Migration[7.0]
  def change
    add_column :order_items, :favorite_restaurant_id, :integer
  end
end
