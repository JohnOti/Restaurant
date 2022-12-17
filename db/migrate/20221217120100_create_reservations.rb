class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :customer_id
      t.integer :favorite_restaurant_id
      t.integer :menu_id
      t.integer :no_of_seats
      t.integer :total_price

      t.timestamps
    end
  end
end
