class RemoveMenuIdFromOrderItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :menu_id, :integer
  end
end
