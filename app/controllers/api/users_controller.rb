class Api::UsersController < ApplicationController
  def index
    # fix this. still N+1 query
    @users = User.includes(:relationships, :reverse_relationships, :posts)
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
end
