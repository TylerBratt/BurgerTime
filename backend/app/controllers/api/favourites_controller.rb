class Api::FavouritesController < ApplicationController
  def index
    favourites = Favourite.all
    render json: favourites
  end

  def create
    @favourite = Favourite.new(favourite_params)
    puts favourite_params
      if @favourite.save
        # login!
        render json: {
          status: 'created',
          favourite: @favourite
        }
      else
        render json: {
          status: 500,
          errors: @favourite.errors.full_messages
        }
      end
    end

  def favourite_params
    params.require(:favourite).permit(:user_id, :burger_id)
  end
end
