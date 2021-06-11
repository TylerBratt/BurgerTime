class Api::BurgerlikesController < ApplicationController
  def index
    burgerlikes = Burgerlike.all
    render json: burgerlikes
  end

  def create
    @burgerlike = Burgerlike.new(burgerlike_params)
    puts burgerlike_params
      if @burgerlike.save
        # login!
        render json: {
          status: 'created',
          burgerlike: @burgerlike
        }
      else
        render json: {
          status: 500,
          errors: @burgerlike.errors.full_messages
        }
      end
    end

  def burgerlike_params
    params.require(:burgerlike).permit(:burger_id, :likes, :dislikes)
  end
end
