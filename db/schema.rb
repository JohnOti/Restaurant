

ActiveRecord::Schema[7.0].define(version: 2022_12_17_123109) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.integer "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorite_restaurants", force: :cascade do |t|
    t.string "name"
    t.integer "location_id"
    t.text "reviews"
    t.integer "ratings"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "customer_id"
    t.integer "favorite_restaurant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "menus", force: :cascade do |t|
    t.string "cuisine"
    t.integer "price"
    t.integer "favorite_restaurant_id"
    t.text "ingredients"
    t.binary "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "customer_id"
    t.integer "favorite_restaurant_id"
    t.integer "menu_id"
    t.integer "no_of_seats"
    t.integer "total_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
