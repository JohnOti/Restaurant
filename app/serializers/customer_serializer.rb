class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :orders, :reservations

end
