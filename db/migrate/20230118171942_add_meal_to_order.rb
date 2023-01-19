class AddMealToOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :meal, :string
  end
end
