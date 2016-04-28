class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes([:user,:comments])
    render :index
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :create
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :image_url)
  end
end
