class FavoriteRestaurantsController < ApplicationController
  before_action :set_favorite_restaurant, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:create, :index,:show] 
  
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
    @favorite_restaurant = FavoriteRestaurant.create!(favorite_restaurant_params)
      render json: @favorite_restaurant, status: :created
  end

  # PATCH/PUT /favorite_restaurants/1
  def update
    @favorite_restaurant.update(favorite_restaurant_params)
      render json: @favorite_restaurant
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
      params.permit(:name, :image, :location_id, :password, :password_confirmation)
    end

    #Invalid Records
    def invalid_record_response(e)
      render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
