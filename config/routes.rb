Rails.application.routes.draw do
  resources :ratings
  resources :reviews
  resources :favorite_restaurants
  resources :menus
  resources :locations
  resources :favorites
  resources :reservations
  resources :customers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  #Customers
  post "/login", to: "sessions#create"
  get "/me", to: "customers#show"
  delete "/logout", to: "sessions#destroy"

  #Restaurants
  post "/restaurant_login", to: "sessions#create_restaurant"

end
