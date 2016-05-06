class Api::UsersController < ApplicationController
  def index
    @users = User.includes(:followed_users, :followers, :posts)
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
end
