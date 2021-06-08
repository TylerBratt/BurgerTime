class Api::FavoritesController < ApplicationController
  def index
    favorites = Favorite.all
    render json: favorites
  end

  def favorite_params
    params.require(:favorite).permit(:user_id, :burger_id)
  end
end
