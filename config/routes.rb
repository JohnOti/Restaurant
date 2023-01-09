Rails.application.routes.draw do
  resources :favorite_restaurants
  resources :menus
  resources :locations
  resources :favorites
  resources :reservations
  resources :customers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/auth/signup", to: "customers#create" 
  post "/auth/signin", to: "sessions#create"
  delete "/auth/logout", to: "sessions#destroy"

end
