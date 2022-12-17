class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus do |t|
      t.string :cuisine
      t.integer :price
      t.integer :favorite_restaurant_id
      t.text :ingredients
      t.binary :image

      t.timestamps
    end
  end
end
