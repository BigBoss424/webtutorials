Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # blog: config/routes.rb
  mount Wellspring::Engine, at :'/admin'
end
