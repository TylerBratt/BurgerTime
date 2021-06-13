class Api::BurgerlikesController < ApplicationController

  before_action :find_Burgerlike, only: [:update]

  def index
    burgerlikes = Burgerlike.all
    render json: burgerlikes
  end

  # def create
  #   @burgerlike = Burgerlike.new(burgerlike_params)
  #   puts burgerlike_params
  #     if @burgerlike.save
  #       # login!
  #       render json: {
  #         status: 'created',
  #         burgerlike: @burgerlike
  #       }
  #     else
  #       render json: {
  #         status: 500,
  #         errors: @burgerlike.errors.full_messages
  #       }
  #     end
  #   end

  def update
    puts burgerlike_params
      if @burgerlike.update(burger_id: params[:burgerlike][:burger_id], likes: params[:burgerlike][:likes], dislikes: params[:burgerlike][:dislikes])
        puts @burgerlike
        render json: {
          status: 'updated',
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

  def find_Burgerlike
    @burgerlike = Burgerlike.find(params[:id])
  end

end
