require 'jwt'
class Api::UsersController < ApplicationController
  def index
    payload = { data: 'test' }

# IMPORTANT: set nil as password parameter
token = JWT.encode payload, nil, 'none'

# eyJhbGciOiJub25lIn0.eyJkYXRhIjoidGVzdCJ9.
puts token

decoded_token = JWT.decode token, nil, false

    @users = User.all
      if @users
        render json: {
          token: token,
          decoded_token: decoded_token,
          users: @users

        }
      else
        render json: {
          status: 500,
          errors: ['no user found'],
          token: token
        }
      end
  end

  def show
    @user = User.find(params[:id])
      if @user
        render json: {
          user: @user
        }
      else 
        render json: {
          status: 500,
          errors: ['user not found']
        }
      end
  end
  def create
    @user = User.new(user_params)
    puts user_params
      if @user.save
        # login!
        render json: {
          status: 'created',
          user: @user
        }
      else
        render json: {
          status: 500,
          errors: @user.errors.full_messages
        }
      end
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :address)
    end
end
