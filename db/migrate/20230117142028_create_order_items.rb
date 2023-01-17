class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.integer :reservation_id
      t.integer :customer_id
      t.integer :price
      t.string :meal

      t.timestamps
    end
  end
end
