class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :username
      t.string :email
      t.integer :password_digest

      t.timestamps
    end
  end
end
