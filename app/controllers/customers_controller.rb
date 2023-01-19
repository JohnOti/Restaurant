class CustomersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]   
  before_action :set_customer, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:create, :show, :index] 
  # GET /customers
  def index
    @customers = Customer.all

    render json: @customers
  end

  # GET /customers/1
  def show
    @customer = Customer.find_by(id: session[:user_id])
    if @customer
      render json: @customer
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # POST /customers
  def create
    # byebug
    @customer = Customer.create!(customer_params)
    # session[:cusomer_id]= @customer.id
    render json: @customer, status: :created
  end

  # PATCH/PUT /customers/1
  def update
    @customer.update(customer_params)
      render json: @customer 
  end

  # DELETE /customers/1
  def destroy
    @customer.destroy
  end

  def customer_orders
    @customer = Customer.find_by(id: session[:user_id])
    render json: @customer.orders
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.permit(:username, :email, :password, :password_confirmation)
    end

    #Error handling
   def invalid_record_response(e)
      render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end


