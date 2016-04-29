class Api::UsersController < ApplicationController
  def index
    # @users = User.all
    @users = User.includes(:followed_users)
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
end
