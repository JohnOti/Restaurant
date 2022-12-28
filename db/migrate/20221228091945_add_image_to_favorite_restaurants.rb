class AddImageToFavoriteRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :favorite_restaurants, :image, :string
  end
end
