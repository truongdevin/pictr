class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :image_url)
  end
end
