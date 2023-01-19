class ReservationSerializer < ActiveModel::Serializer
  attributes :id,  :customer_id,  :favorite_restaurant_id, :menu_id,  :no_of_seats, :time, :date, :total_price
end
