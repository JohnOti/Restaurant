# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding location"
Location.create!([
    {  
        "city": "Nairobi"
   },
    {
        "city": "Mombasa"
    },
     {
        "city": "Nakuru" 
    },
    {
        "city": "Kisumu"
    }
])
puts "seeding restaurants"
FavoriteRestaurant.create!([
   {
      "name": "Mama Rocks Gourmet Burgers",
      "password": "123456",
      "email": "geo1@gmail.com",
      "image": "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "location_id": 2
    },
    {
      "name": "Fogo Gaucho",
      "password": "123456",
      "email": "geo4@gmail.com",
      "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "location_id": 1
    },
    {
        "name": "Lakeside Resort",
        "password": "123456",
        "email": "geo2@gmail.com",
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "location_id": 4
    }
])

puts "seeding menu"

Menu.create!([
    {
        "cuisine": "Chicken Tikka Masala",
        "price": 1650,
        "favorite_restaurant_id": 1,
        "image": "https://images.bolt.eu/store/2022/2022-03-01/71aeedeb-0e36-4fed-a426-691306cf5f86.png",
        "ingredients": "chicken, cumin, cadamoms, black pepper"

    },
    {
        "cuisine": "Dilliwala Butter Chicken",
        "price": 1250,
        "favorite_restaurant_id": 2,
        "image": "https://images.bolt.eu/store/2022/2022-03-01/4f9b96e3-861a-42ae-96f2-21cb76b1ebe4.png",
        "ingredients": "butter, cheese, chicken, cumin, cadamoms, black pepper"
    },
    {
        "cuisine": "Panko Zucchini",
        "price": 450,
        "favorite_restaurant_id": 3,
        "image": "https://images.bolt.eu/store/2022/2022-11-29/ec9db61c-8281-40cf-b8bd-f013d797f80f.jpeg",
       "ingredients": "zesty mayo, butter, fish, cadamoms, black pepper"
    },
    {
        "cuisine": "Pork Ribs",
        "price": 2150,
        "favorite_restaurant_id": 1,
        "image": "https://cafedelites.com/wp-content/uploads/2018/06/Oven-Pork-Ribs-IMAGE-5-683x1024.jpg",
        "ingredients": "Marinated Baby ribs, Slow Charcoal grilled and mopped in Josephine’s Original Barbecue sauce served with sauce of Choicee"
    },
    {
        "cuisine": "Pork Chops",
        "price": 1200,
        "favorite_restaurant_id": 2,
        "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-03_HT_Pan-fried-pork-chops%2F2022-02-22_ATK-4852",
        "ingredients": "Accompanied with either French fries, mashed potato wedges, steamed potatoes, ugali, or mixed vegetables in season."
    },
    {
        "cuisine": "Chicken Tikka Masala",
        "price": 1650,
        "favorite_restaurant_id": 3,
        "image": "https://images.bolt.eu/store/2022/2022-03-01/71aeedeb-0e36-4fed-a426-691306cf5f86.png",
        "ingredients": "chicken, cumin, cadamoms, black pepper"

    },
    {
        "cuisine": "Dilliwala Butter Chicken",
        "price": 1250,
        "favorite_restaurant_id": 4,
        "image": "https://images.bolt.eu/store/2022/2022-03-01/4f9b96e3-861a-42ae-96f2-21cb76b1ebe4.png",
        "ingredients": "butter, cheese, chicken, cumin, cadamoms, black pepper"
    },
    {    
        "cuisine": "Panko Zucchini",
         "price": 450,
         "favorite_restaurant_id": 1,
        "image": "https://images.bolt.eu/store/2022/2022-11-29/ec9db61c-8281-40cf-b8bd-f013d797f80f.jpeg",
        "ingredients": "zesty mayo, butter, fish, cadamoms, black pepper"
    },
    {
        "cuisine": "Pork Ribs",
        "price": 2150,
        "favorite_restaurant_id": 3,
        "image": "https://cafedelites.com/wp-content/uploads/2018/06/Oven-Pork-Ribs-IMAGE-5-683x1024.jpg",
        "ingredients": "Marinated Baby ribs, Slow Charcoal grilled and mopped in Josephine’s Original Barbecue sauce served with sauce of Choicee"
    },
    {
        "cuisine": "Pork Chops",
        "price": 1200,
        "favorite_restaurant_id": 4,
        "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-03_HT_Pan-fried-pork-chops%2F2022-02-22_ATK-4852",
        "ingredients": "Accompanied with either French fries, mashed potato wedges, steamed potatoes, ugali, or mixed vegetables in season."
   },
    {
        "cuisine": "Chicken Tikka Masala",
       "price": 1650,
       "favorite_restaurant_id": 4,
       "image": "https://images.bolt.eu/store/2022/2022-03-01/71aeedeb-0e36-4fed-a426-691306cf5f86.png",
       "ingredients": "chicken, cumin, cadamoms, black pepper"

    },
    {
         "cuisine": "Dilliwala Butter Chicken",
        "price": 1250,
        "favorite_restaurant_id": 1,
         "image": "https://images.bolt.eu/store/2022/2022-03-01/4f9b96e3-861a-42ae-96f2-21cb76b1ebe4.png",
        "ingredients": "butter, cheese, chicken, cumin, cadamoms, black pepper"
    },
    {
        "cuisine": "Panko Zucchini",
        "price": 450,
        "favorite_restaurant_id": 2,
        "image": "https://images.bolt.eu/store/2022/2022-11-29/ec9db61c-8281-40cf-b8bd-f013d797f80f.jpeg",
        "ingredients": "zesty mayo, butter, fish, cadamoms, black pepper"
    },
    {
        "cuisine": "Pork Ribs",
        "price": 2150,
        "favorite_restaurant_id": 4,
        "image": "https://cafedelites.com/wp-content/uploads/2018/06/Oven-Pork-Ribs-IMAGE-5-683x1024.jpg",
         "ingredients": "Marinated Baby ribs, Slow Charcoal grilled and mopped in Josephine’s Original Barbecue sauce served with sauce of Choicee"
    },
    {
        "cuisine": "Pork Chops",
        "price": 1200,
        "favorite_restaurant_id": 1,
        "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-03_HT_Pan-fried-pork-chops%2F2022-02-22_ATK-4852",
        "ingredients": "Accompanied with either French fries, mashed potato wedges, steamed potatoes, ugali, or mixed vegetables in season."
    },
    {
        "cuisine": "Mbuzi Choma",
        "price": 1250,
        "favorite_restaurant_id": 4,
        "image": "https://meatings.nyamatamu.co.ke/wp-content/uploads/2016/10/RoastGoatLeg-1.jpg",
        "ingredients": "meat, makaa, fire"
    },
    {
        "cuisine": "Mbuzi Choma",
        "price": 1250,
        "favorite_restaurant_id": 2,
        "image": "https://meatings.nyamatamu.co.ke/wp-content/uploads/2016/10/RoastGoatLeg-1.jpg",
         "ingredients": "meat, makaa, fire"
   },
   {
        "cuisine": "Mbuzi Choma",
       "price": 1250,
       "favorite_restaurant_id": 3,
        "image": "https://meatings.nyamatamu.co.ke/wp-content/uploads/2016/10/RoastGoatLeg-1.jpg",
        "ingredients": "meat, makaa, fire"
    }
])
puts "Done seeding"