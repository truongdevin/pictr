Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:create, :index, :show]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :sessions, only: [:index]
    resources :users, only: [:index, :show]
    resources :relationships, only: [:create, :destroy]
  end
end
