class Api::ExternalBurgersController < ApplicationController
  

  def get_external_burgers
    @url = "http://burger-api-to.herokuapp.com/burgers"
    response = RestClient.get(@url)
    render json: response
  end

  def create
    @newBurger = NewBurger.new(newBurger_params)
    puts newBurger_params
    if @newBurger.save
      render json: {
        status: 'created',
        newBurger: @newBurger
      }
    else
      render json: {
        status: 500,
        errors: @newBurger.errors.full_messages
      }
    end
  end
  def newBurger_params
    params.require(:newBurger).permit( :name, :restaurant, :restaurantID, :brand, :web, :image, :description, :ingredients, :optionals, :isVegetarian, :addressID, :number, :line1, :line2, :postalCode, :country)
  end

end
