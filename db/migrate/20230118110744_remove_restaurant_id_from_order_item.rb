class RemoveRestaurantIdFromOrderItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :restaurant_id, :integer
  end
end
