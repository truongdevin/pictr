Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:create, :index, :show]
    resources :comments, only: [:create, :destroy]
    resources :users, only: [:index]
  end
end
