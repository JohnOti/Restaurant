class RemoveFavotiteRestaurantIdFromOrderItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :favotite_restaurant_id, :integer
  end
end
