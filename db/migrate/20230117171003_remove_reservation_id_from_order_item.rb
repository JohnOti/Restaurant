class RemoveReservationIdFromOrderItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :order_items, :reservation_id, :integer
  end
end
