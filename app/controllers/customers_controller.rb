class CustomersController < ApplicationController
  before_action :set_customer, only: %i[ show update destroy ]
 rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_response

  # GET /customers
  def index
    @customers = Customer.all

    render json: @customers
  end

  # GET /customers/1
  def show
    render json: @customer
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
    if @customer.update(customer_params)
      render json: @customer
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /customers/1
  def destroy
    @customer.destroy
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


