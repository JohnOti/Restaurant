class AddPasswordDigestToFavoriteRestaurant < ActiveRecord::Migration[7.0]
  def change
    add_column :favorite_restaurants, :password_digest, :string
  end
end
