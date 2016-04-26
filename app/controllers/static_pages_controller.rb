class StaticPagesController < ApplicationController
  before_filter :require_signed_in!
  def root
  end
end
