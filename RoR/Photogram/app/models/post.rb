class Post < ApplicationRecord
  has_attached_file :image, syles: { :medium => "640x"}
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
