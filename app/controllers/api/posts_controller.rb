class Api::PostsController < ApplicationController

  def index
    subquery = Relationship.select("followed_id").where("follower_id = ?", current_user.id)
    @posts = Post.includes(:user, :likes, {comments: :user})
      .where("user_id IN (#{subquery.to_sql}) OR user_id = ?", current_user.id).limit(3 * count).order(id: :desc)
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

  def count
    params[:count] ? params[:count].to_i : 1
  end
end
