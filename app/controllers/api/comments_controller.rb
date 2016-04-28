class Api::CommentsController < ApplicationController
  # def index
  #   @comments = Comment.includes(:user)
  #   render :index
  # end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :create
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :body)
  end
end
