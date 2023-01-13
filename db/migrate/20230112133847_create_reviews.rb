class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :favorite_restaurant_id
      t.integer :customer_id
      t.string :comments

      t.timestamps
    end
  end
end
