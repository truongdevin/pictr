class Post < ActiveRecord::Base
  validates :user_id, :image_url, presence: true

  belongs_to :user

end
