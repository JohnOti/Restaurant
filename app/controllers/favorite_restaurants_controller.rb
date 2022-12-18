class FavoriteRestaurantsController < ApplicationController
  before_action :set_favorite_restaurant, only: %i[ show update destroy ]

  # GET /favorite_restaurants
  def index
    @favorite_restaurants = FavoriteRestaurant.all

    render json: @favorite_restaurants
  end

  # GET /favorite_restaurants/1
  def show
    render json: @favorite_restaurant
  end

  # POST /favorite_restaurants
  def create
    @favorite_restaurant = FavoriteRestaurant.new(favorite_restaurant_params)

    if @favorite_restaurant.save
      render json: @favorite_restaurant, status: :created, location: @favorite_restaurant
    else
      render json: @favorite_restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorite_restaurants/1
  def update
    if @favorite_restaurant.update(favorite_restaurant_params)
      render json: @favorite_restaurant
    else
      render json: @favorite_restaurant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorite_restaurants/1
  def destroy
    @favorite_restaurant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_restaurant
      @favorite_restaurant = FavoriteRestaurant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_restaurant_params
      params.require(:favorite_restaurant).permit(:name, :location_id, :reviews, :ratings)
    end
end
