Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/receipts', to: 'homes#index'
  get '/receipts/new', to: 'homes#index'

end
