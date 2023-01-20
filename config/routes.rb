Rails.application.routes.draw do
  resources :order_items
  resources :ratings
  resources :reviews
  resources :favorite_restaurants
  resources :menus
  resources :locations
  resources :favorites
  resources :reservations
  resources :customers
  resources :orders
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  #Customers
  post "/login", to: "sessions#create"
  get "/me", to: "customers#show"
  delete "/logout", to: "sessions#destroy"
  delete "/res_logout", to: "sessions#res_logout"

  get "/customer_orders", to: "customers#customer_orders"

  #Restaurants
  post "/restaurant_login", to: "sessions#create_restaurant"

end
