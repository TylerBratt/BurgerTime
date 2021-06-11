class Api::ExternalBurgersController < ApplicationController
  

  def get_external_burgers
    url = "http://burger-api-to.herokuapp.com/burgers"
    response = RestClient.get(url)
    render json: response
  end

  def create
  end

end
