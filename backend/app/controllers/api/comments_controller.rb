class Api::CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    @comment = Comment.new(comment_params)
    puts comment_params
      if @comment.save
        # login!
        render json: {
          status: 'created',
          comment: @comment
        }
      else
        render json: {
          status: 500,
          errors: @comment.errors.full_messages
        }
      end
    end

  def favourite_params
    params.require(:comment).permit(:user_id, :burger_id, :comment)
  end
end
