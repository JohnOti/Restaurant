class RemoveRatingsFromFavoriteRestaurants < ActiveRecord::Migration[7.0]
  def change
    remove_column :favorite_restaurants, :ratings, :integer
  end
end
