class Api::RelationshipsController < ApplicationController

  def create
    @relationship = Relationship.new(relationship_params)
    if @relationship.save
      render :create
    else
      render json: @relationship.errors.full_messages, status: 422
    end
  end

  def destroy
    @relationship = Relationship.find(params[:id])
    if @relationship.destroy
      render :show
    else
      render json: @relationship.errors.full_messages, status: 422
    end
  end

  private
  def relationship_params
    params.require(:relationship).permit(:follower_id, :followed_id)
  end
end
