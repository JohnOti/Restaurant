class RemovePriceFromOrderItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :price, :integer
  end
end
