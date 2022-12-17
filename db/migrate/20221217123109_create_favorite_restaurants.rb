class CreateFavoriteRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_restaurants do |t|
      t.string :name
      t.integer :location_id
      t.text :reviews
      t.integer :ratings

      t.timestamps
    end
  end
end
