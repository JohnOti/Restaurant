class AddTimeToReservation < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :time, :time
  end
end
