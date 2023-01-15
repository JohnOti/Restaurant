class RemoveReviewsFromFavoriteRestaurants < ActiveRecord::Migration[7.0]
  def change
    remove_column :favorite_restaurants, :reviews, :text
  end
end
