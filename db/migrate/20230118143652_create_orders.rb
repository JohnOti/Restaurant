class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.integer :favorite_restaurant_id
      t.integer :menu_id

      t.timestamps
    end
  end
end
