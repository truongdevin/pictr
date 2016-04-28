class Api::UsersController < ApplicationController
  def index
    @user = User.all
    render :index
  end
end
