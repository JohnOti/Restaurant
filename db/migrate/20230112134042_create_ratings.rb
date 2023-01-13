class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :favorite_restaurant_id
      t.integer :customer_id
      t.integer :rating

      t.timestamps
    end
  end
end
