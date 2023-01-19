class RemoveDateFromReservation < ActiveRecord::Migration[7.0]
  def change
    remove_column :reservations, :date, :datetime
  end
end
